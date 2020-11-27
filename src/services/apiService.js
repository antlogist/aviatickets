import axios from "axios";
import config from "../config/apiConfig";

/**
 * @class
 * @classdesc Class representing the set of methods for interacting with Aviaseles API.
 */
class Api {
    /**
     * Access to the API.
     * @param {oject} config - The object contains the URL that provided access to the Aviasales API.
     */
    constructor(config) {
        this.url = config.url;
    }
    /**
     * Download data about countries from the config URL.
     *
     * @return {Promise<Array>} The data from the URL.
     */
    async countries() {
        try {
            const response = await axios.get(`${this.url}/countries`);
            return response.data;
        } catch (err) {
            console.log(err);
            return Promise.reject(err);
        }
    }
    /**
     * Download data about cities from the config URL.
     *
     * @return {Promise<Array>} The data from the URL.
     */
    async cities() {
        try {
            const response = await axios.get(`${this.url}/cities`);
            return response.data;
        } catch (err) {
            console.log(err);
            return Promise.reject(err);
        }
    }
    /**
     * Download data about airlines from the config URL.
     *
     * @return {Promise<Array>} The data from the URL.
     */
    async airlines() {
        try {
            const response = await axios.get(`${this.url}/airlines`);
            return response.data;
        } catch (err) {
            console.log(err);
            return Promise.reject(err);
        }
    }
    /**
     * Download data about prices from the config URL.
     *
     * @param {object} params - <pre><code>
{
    origin, 
    destination, 
    depart_date, 
    return_date, 
    currency
}</code></pre>
     * @return {Promise<Array>} The data from the URL.
     */
    async prices(params) {
        try {
            const response = await axios.get(`${this.url}/prices/cheap`, {
                params
            });
            return response.data;
        } catch (err) {
            console.log(err);
            return Promise.reject(err);
        }
    }
}

const api = new Api(config);

export default api;
