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
        addItem: function(product) {
            // Check if the product already exists in the cart
            const existingProduct = cart.find(item => item.productId === product.id);
            if (existingProduct) {
                // Increment quantity if the product is already in the cart
                existingProduct.quantity += 1;
            } else {
                // Add new product with quantity set to 1
                cart.push({
                    productId: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1
                });
            }
        },

        // Method to remove an item from the cart (optional)
        removeItem: function(productId) {
            const index = cart.findIndex(item => item.productId === productId.id);
            console.log(index)
            if (index > -1) {
                cart.splice(index, 1);
            }
        }
    };
}

// Creating the cart
const cart = shoppingCart();

const product1 = { id: 1, name: "product 1", price: 10 };
const product2 = { id: 2, name: "product 2", price: 20 };

cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product1); // Adding product1 again to increment quantity

console.log('Cart Items:', cart.getCartItems());

cart.removeItem(product2); // Remove product2
console.log('Cart Items:', cart.getCartItems());
