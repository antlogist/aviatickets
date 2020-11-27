import api from "@/services/apiService.js";
import {formatDate} from "@/helpers/date.js";

/**
 * @class
 * @classdesc Class representing the set of methods transforming and serializing data from API.
 * @param {object} api - The set of methods for interacting with Aviaseles API.
 * @param {object} helpers - The set of methods to help to transform data.
 */
class Locations {
    constructor(api, helpers) {
        /**
         * @type {object}
         */
        this.api = api;
        /**
         * @type {Array}
         */
        this.countries = null;
        /**
         * @type {Array}
         */
        this.cities = null;
        /**
         * @type {object}
         */
        this.shortCitiesList = {};
        /**
         * @type {object}
         */
        this.airlines = {};
        /**
         * @type {object}
         */
        this.lastSearch = {};
        /**
         * @type {object}
         */
        this.formatDate = helpers.formatDate;
    }

    /**
     * @description Get all the countries, cities and airlines from the API. Assign transformed data to the constructor properties.
     */
    async init() {
        const response = await Promise.all([
            this.api.countries(),
            this.api.cities(),
            this.api.airlines()
        ]);

        // Array destructuring
        const [countries, cities, airlines] = response;
        // Serialize countries
        this.countries = this.serializeCountries(countries);
        // Serialize cties
        this.cities = this.serializeCities(cities);
        // Shortlist for the form autocomplete.
        this.shortCitiesList = this.createShortCitiesList(this.cities);
        // Serialize airlines
        this.airlines = this.serializeAirlines(airlines);
        
        return response;
    }
    /**
     * @description Get city code by key from the submit form. 
     * @param {string} key - city, country
     * @returns {string}
     */
    getCityCodeByKey(key) {
        const city = Object.values(this.cities).find(item => item.full_name === key);
        return city.code;
    }

    /**
     * @description Transform array of countries into the object
     * @param {Array} countries - Array of all the countries
     * @returns {object} 
        <pre><code>
        {
            countryCode: {...}
            ...
        }</code></pre>
     */
    serializeCountries(countries) {
        return countries.reduce((acc, country) => {
            acc[country.code] = country;
            return acc;
        }, {});
    }

    /**
     * @description Transform array of cities into the object, Add new properties to the city object. New properties are country name and full name.
     * @param {Array} cities - Array of all the cities
     * @returns {object}
        <pre><code>
        {
            cityCode: {
                ...,
                countryName,
                full_name
            }
            ...
        }</code></pre>
     */
    serializeCities(cities) {
        return cities.reduce((acc, city) => {
            // Get country name by code
            const countryName = this.getCountryNameByCode(city.country_code);
            // Get the city name translation if the name doesn't exist.
            city.name = city.name || city.name_translations.en;
            // Get the full name of the city. This data is a shortlist for server request and autocomplete.
            const full_name = `${city.name ||
                city.name_translations.en}, ${countryName}`;
            // Add new properties to the object.
            acc[city.code] = { ...city, countryName, full_name };
            return acc;
        }, {});
    }

    /**
     * @description Transform array of airlines into the object
     * @param {Array} airlines - Array of all the airlines
     * @returns {object} 
        <pre><code>
        {
            airlineCode: {...}
            ...
        }</code></pre>
     */
    serializeAirlines(airlines) {
        return airlines.reduce((acc, item) => {
            item.logo = `http://pics.avs.io/200/200/${item.code}.png`;
            item.name = item.name || item.name_translations.en;
            acc[item.code] = item;
            return acc;
        }, {});
    }

    /**
     * @description Get country name by code.
     * @param {string} code - country code
     * @returns {object}
     */
    getCountryNameByCode(code) {
        return this.countries[code].name;
    }

    /**
     * @description Create city shortlist for the form autocomplete
     * @param {object} cities - Seriliazied cities object
     * @returns {Array}
     */
    createShortCitiesList(cities) {
        // Object.entries(Object) returns [[key, value], [key, value] ...]
        return Object.entries(cities).reduce((acc, [, city]) => {
            acc.push(city.full_name);
            return acc;
        }, []);
    }
    
    /**
     * @description Get city name by code. For the tickets rendering needed.
     * @param {string} code - city code
     * @returns {string} 
     */
    getCityNameByCode(code) {
        return this.cities[code].name;
    }
    
    /**
     * @description Get airline name by code. For the tickets rendering needed.
     * @param {string} code - airline code
     * @returns {string} 
     */
    getAirlineNameByCode(code) {
        return this.airlines[code] ? this.airlines[code].name : '';
    }
    
    /**
     * @description Get airline logo url by code. For the tickets rendering needed.
     * @param {string} code - airline code
     * @returns {string} 
     */
    getAirlineLogoByCode(code) {
        return this.airlines[code] ? this.airlines[code].logo : '';
    }
    
    /**
     * @description Get all the requested tickets.
     * @param {object} - params
     * @returns {object}
     */
    async fetchTickets(params) {
        // Search results
        const response = await this.api.prices(params);
        // Serialized search results
        this.lastSearch = this.serializeTickets(response.data);
        console.log(this.lastSearch);
    }
    
    /**
     * @description Create new array of tickets
     * @param {Array} tickets - Array of the requested tickets
     * @returns {Array} 
     */
    serializeTickets(tickets) {
        return Object.values(tickets).map(ticket => {
            return {
                ...ticket,
                origin_name: this.getCityNameByCode(ticket.origin),
                destination_name: this.getCityNameByCode(ticket.destination),
                airline_logo: this.getAirlineLogoByCode(ticket.airline),
                airline_name: this.getAirlineNameByCode(ticket.airline),
                departure_at: this.formatDate(ticket.departure_at, 'dd MM yyyy hh:mm'),
                return_at: this.formatDate(ticket.return_at, 'dd MM yyyy hh:mm'),
            }
        })
    }
}

const locations = new Locations(api, {formatDate});

export default locations;
