/**
 * @class
 * @classdesc Class representing form data.
 */

class FormUI {
    constructor() {
        /**
         * @type {HTMLElement}
         */
        this._form = document.forms["locationControls"];
        /**
         * @type {HTMLElement}
         */
        this.origin = document.getElementById("originInput");
        /**
         * @type {HTMLElement}
         */
        this.destination = document.getElementById("destinationInput");
        /**
         * @type {HTMLElement}
         */
        this.depart = document.getElementById("datePickerDepart");
        /**
         * @type {HTMLElement}
         */
        this.return = document.getElementById("datePickerReturn");
    }

    /**
     * @description Get submit form
     * @returns {HTMLElement}
     */
    get form() {
        return this._form;
    }
    
    /**
     * @description Get the origin country and city
     * @returns {string}
     */
    get originValue() {
        return this.origin.value;
    }

    /**
     * @description Get the destination country and city
     * @returns {string}
     */
    get destinationValue() {
        return this.destination.value;
    }

    /**
     * @description Get the depart date
     * @returns {string}
     */
    get departDateValue() {
        return this.depart.value;
    }

    /**
     * @description Get the return date
     * @returns {string}
     */
    get returnDateValue() {
        return this.return.value;
    }

    /**
     * @description Add autocomplete data to the DOM
     * @param {array} elem - Array of countries and cities for the autocomplete
     * @returns {HTMLElement}
     */
    setAutocompleteData(elem = []) {
        $(".auto-complete").autocomplete({
            source: elem,
            delay: 500,
            minLength: 3
        });
    }
}

const formUI = new FormUI();

export default formUI;
