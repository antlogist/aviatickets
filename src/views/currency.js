/**
 * @class
 * @classdesc Class representing currency and currency symbol.
 */

class CurrencyUI {
    constructor() {
        /**
         * @type {HTMLSelectElement}
         */
        this.currency = document.getElementById("currencySelect");
        /**
         * @type {object}
         */
        this.dictionary = {
            USD: "$",
            EUR: "€"
        };
    }

    /**
     * @description Get currency value
     * @returns {string}
     */
    get currencyValue() {
        return this.currency.value;
    }

    /**
     * @description Get currency symbol
     * @returns {string}
     */
    getCurrencySymbol() {
        return this.dictionary[this.currencyValue];
    }
}

const currencyUI = new CurrencyUI();

export default currencyUI;
