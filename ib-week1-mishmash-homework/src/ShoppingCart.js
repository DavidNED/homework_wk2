const groupAdultsByAgeRange = require("./transform").groupAdultsByAgeRange


class Cart {
    constructor(){
    this.newCart = []
    }

    getItems() {
    return this.newCart;
    }
}

module.exports.Cart = Cart