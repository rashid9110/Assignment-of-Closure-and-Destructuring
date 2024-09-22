// Shopping cart using closure
function shoppingCart() {
    // Cart array is private and enclosed within the closure
    let cart = [];

    return {
        // Method to get items from the cart
        getCartItems: function() {
            return cart;
        },

        // Method to add an item to the cart
        addItem: function(item) {
            cart.push(item);
        },

        // Method to remove an item from the cart (optional)
        removeItem: function(item) {
            const index = cart.indexOf(item);
            if (index > -1) {
                cart.splice(index, 1);
            }
        }
    };
}

// Creating the cart
const cart = shoppingCart();

// Adding items to the cart
cart.addItem("Laptop");
cart.addItem("Phone");

// Getting the cart items
console.log("Cart Items:", cart.getCartItems()); // Output: Cart Items: [ 'Laptop', 'Phone' ]
cart.removeItem("Laptop");
console.log("Cart Items:", cart.getCartItems());
