/**
 * @class
 * @classdesc Class representing favourite tickets.
 */
class Favourite {
    constructor() {
        this.ticketsObject = {};
        this.ticketsArray = [];
    }
    
    getTicketsArray() {
        return this.ticketsArray;
    }

    /**
     * @returns {Array}
     */
    transformTicketsIntoArray() {
        this.ticketsArray = Object.values(this.ticketsObject);
    }

    addFavouriteTicket(ticket) {
        const key = this.createTicketKey(ticket);
        ticket.key = key;
        this.ticketsObject[key] = ticket;
        this.transformTicketsIntoArray();
    }

    createTicketKey(ticket) {
        const key = (ticket.flight_number + ticket.departure_at).replace(/\s/g, "");
        return key;
    }
}

const favourite = new Favourite();

export default favourite;
