
    class ShoppingCart {
        constructor(cart) {
        this.cart = cart
        this.newCart = []
        }

    getItems() {
        return this.newCart;
        }
    

    addItem(itemName, quantity, price) {
        let newObj = {'name': itemName, 'quantity': quantity, 'pricePerUnit': price}
        this.newCart.push(newObj) 
        console.log(newCart)
        
        
    }


    clear() {
        return this.newCart.length = 0
    }


    cartTotal() {
        return this.getItems()
    }
}







module.exports = ShoppingCart

//const cart = new ShoppingCart()
//cart.getItems();