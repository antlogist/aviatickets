import currencyUI from "./currency";
/**
 * @class
 * @classdesc Class representing st of methods to render and clear tickets.
 * @param {string} currency - Currency for pricing
 */
class TicketsUI {
    constructor(currency) {
        this.container = document.querySelector(".tickets-wrapper");
        this.favContainer = document.querySelector(".fav-wrapper");
        this.getCurrencySymbol = currency.getCurrencySymbol.bind(currency);
    }

    /**
     * @description Tickets rendering
     * @params {Array} tickets - Array of requesting tickets
     */
    renderTickets(tickets) {
        this.clearContainer("container");

        if (!tickets.length) {
            this.showEmptyMsg();
            return;
        }

        let fragment = "";

        const currency = this.getCurrencySymbol();
        tickets.forEach((ticket, index) => {
            const template = TicketsUI.ticketTemplate(ticket, currency, index, "container");
            fragment += template;
        });
        this.container.insertAdjacentHTML("afterbegin", fragment);
    }
    
    /**
     * @description Render favourite tickets
     */
    renderFavouriteTickets(tickets) {
        this.clearContainer("favourite");
        let fragment = "";

        const currency = this.getCurrencySymbol();
        tickets.forEach((ticket, index) => {
            const template = TicketsUI.ticketTemplate(ticket, currency, index, "favourte");
            fragment += template;
        });
        this.favContainer.insertAdjacentHTML("afterbegin", fragment);
    }
    
    get tickets() {
        return this.container;
    }

    /**
     * @description Clear HTML content
     */
    clearContainer(container) {
        if (container === "container") {
            this.container.innerHTML = "";
        } else {
            this.favContainer.innerHTML = "";
        }
        
    }

    /**
     * @description Rendering message if tickets were not found
     * @returns {HTMLElement}
     */
    showEmptyMsg() {
        const template = TicketsUI.emptyMsgTemplate();
        this.container.insertAdjacentHTML("afterbegin", template);
    }

    /**
     * @description Template for empty search result
     * @returns {string}
     */
    static emptyMsgTemplate() {
        return `<div class="card bg-light mb-3">
                    <div class="card-header">No tickets</div>
                    <div class="card-body">
                        <h5 class="card-title">No tickets were found on your request</h5>
                    </div>
                </div>`;
    }

    /**
     * @description Template for serch result
     * @returns {string}
     * @param {object} ticket - Ticket object
     * @param {string} currency - Currency symbol
     */
    static ticketTemplate(ticket, currency, index, container) {
        const favBtn = '<div class="star btn-fav"></div>';
        return `<div class="card ticket bg-light mb-3" data-index=${index}>
                    <div class="card-header">
                        <div class="row">
                            <div class="col-6 text-left">${ticket.origin_name} -> ${ticket.destination_name}</div>
                            <div class="col-6 text-right">
                                ${container === "container" ? favBtn : ""}
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <img
                          src="${ticket.airline_logo}"
                          class="ticket-airline-img"
                          style="max-width: 100px;"    
                        />
                        <div class="row mb-3">
                            <div class="col-6">
                                Flight number: ${ticket.flight_number}<br>
                                Transfers: ${ticket.transfers}
                            </div>
                            <div class="col-6">
                                ${ticket.departure_at}<br>
                                Price:${currency} ${ticket.price}
                            </div>
                        </div>
                    </div>
                </div>`;
    }
}

const ticketsUI = new TicketsUI(currencyUI);

export default ticketsUI;
