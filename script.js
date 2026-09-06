// ===============================
// PRODUCT DATA
// ===============================

const products = [
    {
        id: 1,
        name: "Premium Black T-Shirt",
        price: 25,
        image: "images/tshirt.jpg"
    },
    {
        id: 2,
        name: "Casual Sneakers",
        price: 60,
        image: "images/shoes.jpg"
    },
    {
        id: 3,
        name: "Classic Watch",
        price: 45,
        image: "images/watch.jpg"
    },
    {
        id: 4,
        name: "Travel Backpack",
        price: 35,
        image: "images/bag.jpg"
    }
];


// ===============================
// GET CART FROM LOCAL STORAGE
// ===============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];


// ===============================
// UPDATE CART COUNT
// ===============================

function updateCartCount() {

    const cartCount = document.getElementById("cart-count");

    let total = 0;

    cart.forEach(function(item) {
        total += item.quantity;
    });

    cartCount.textContent = total;
}


// ===============================
// ADD TO CART
// ===============================

const buttons = document.querySelectorAll(".add-cart");

buttons.forEach(function(button, index) {

    button.addEventListener("click", function() {

        const product = products[index];

        const existingProduct = cart.find(function(item) {
            return item.id === product.id;
        });


        if (existingProduct) {

            existingProduct.quantity++;

        } else {

            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });

        }


        // Save cart
        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );


        // Update number
        updateCartCount();


        // Button effect
        button.textContent = "Added ✓";

        setTimeout(function() {
            button.textContent = "Add to Cart";
        }, 1000);

    });

});


// ===============================
// SHOP NOW
// ===============================

const shopNowButton = document.getElementById("shop-now");

if (shopNowButton) {

    shopNowButton.addEventListener("click", function() {

        document
            .getElementById("products")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

}


// Run when page loads
updateCartCount();