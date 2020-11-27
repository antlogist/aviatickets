const path = require("path");
const webpack = require('webpack')
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const {
    BundleAnalyzerPlugin
} = require("webpack-bundle-analyzer");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;
console.log(isDev);

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all"
        }
    }

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config;
}

const cssLoaders = extra => {
    const loaders = [{
        loader: MiniCSSExtractPlugin.loader,
        options: {
            hmr: isDev,
            reloadAll: true
        }
    },
    "css-loader", 
    {
        loader: 'postcss-loader',
        options: {
            postcssOptions: {
              plugins: [
                [
                  'autoprefixer',
                  {
                    'overrideBrowserslist': ['> 1%', 'last 2 versions']
                  },
                ],
              ],
            },
          },
    }];

    if (extra) {
        loaders.push(extra);
    };

    return loaders;
}

const jsLoaders = () => {
    const loaders = [{
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"]
        }
    }]

    isDev ? loaders.push("eslint-loader") : "";

    return loaders;
}

const plugins = () => {
    const base = [
        new HTMLWebpackPlugin({
            template: "./index.html",
            minify: {
                collapseWhitespace: isProd
            }
        }),
        // new HTMLWebpackPlugin({
        //     filename: "./sitemap.html",
        //     template: "./sitemap.html",
        // }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, "src/favicon.ico"),
                to: path.resolve(__dirname, "dist")
            }]
        }),
        new MiniCSSExtractPlugin({
            filename: "[name].[hash].css",
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery'",
            "window.$": "jquery"
        })
    ]

    isProd ? base.push(new BundleAnalyzerPlugin()) : "";

    return base;
}

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: {
        main: ["@babel/polyfill", "./js/app.js"],
    },
    resolve: {
        extensions: [".js", ".json", ".png"],
        alias: {
            "@classes": path.resolve(__dirname, "src/classes"),
            "@": path.resolve(__dirname, "src")
        }
    },
    optimization: optimization(),
    devServer: {
        port: 4200,
        hot: true,
    },
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "dist"),
    },
    devtool: isDev ? "source-map" : "",
    plugins: plugins(),
    module: {
        rules: [{
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders("sass-loader")
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ["file-loader"]
            },
            {
                test: /\.xml$/,
                use: ["xml-loader"]
            },
            {
                test: /\.csv$/,
                use: ["csv-loader"]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: jsLoaders()
            }
        ]
    }
}