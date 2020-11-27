import "@/plugins";
import "@/styles/scss.scss";
import locations from "@/store/locations.js";
import favourite from "@/store/favourite.js";
import formUI from "@/views/form";
import currencyUI from "@/views/currency";
import ticketsUI from "@/views/tickets";

/**
 * @function appInit
 * @description Initialize the application
 */

(function appInit() {
    document.addEventListener("DOMContentLoaded", () => {
        initApp();
        const form = formUI.form;
        const tickets = ticketsUI.tickets;

        // Events
        form.addEventListener("submit", e => {
            e.preventDefault();
            onFormSubmit();
        });
        
        // Ticket click
        tickets.addEventListener("click", e => {
            e.preventDefault();
            if (e.target.classList.contains("btn-fav")) {
                const card = e.target.closest(".card");
                const index = card.dataset.index;
                onFavouriteTicketClick(index)
            }
        });

        // Handlers
        async function initApp() {
            // Get all the countries, cities and airlines from the API and serialize them.
            await locations.init();
            // Add autocomplete functionality
            formUI.setAutocompleteData(locations.shortCitiesList);
        }
        
        // Favourite ticket click
        function onFavouriteTicketClick(index) {
            favourite.addFavouriteTicket(locations.lastSearch[index]);
            ticketsUI.renderFavouriteTickets(favourite.getTicketsArray());
        }

        // Form submit
        async function onFormSubmit() {
            const origin = locations.getCityCodeByKey(formUI.originValue);
            const destination = locations.getCityCodeByKey(
                formUI.destinationValue
            );
            const depart_date = formUI.departDateValue;
            const return_date = formUI.returnDateValue;
            const currency = currencyUI.currencyValue;
            await locations.fetchTickets({
                origin,
                destination,
                depart_date,
                return_date,
                currency
            });
            ticketsUI.renderTickets(locations.lastSearch);
        }
    });
})();
