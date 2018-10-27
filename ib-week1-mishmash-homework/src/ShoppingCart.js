
    class ShoppingCart {
        constructor(cart) {
        this.cart = cart
        this.newCart = []
        }

    getItems() {
        return this.newCart;}
    

    addItem(itemName, quantity, price) {
        let newObj = {'name': itemName, 'quantity': quantity, 'pricePerUnit': price}
        this.newCart.push(newObj)}


    clear() {
        this.newCart.length = 0}


    total() {
       return this.getItems().reduce((acc, value) => acc + value.price * value.quantity)
    }

    }







module.exports = ShoppingCart

//const cart = new ShoppingCart()
//cart.getItems();