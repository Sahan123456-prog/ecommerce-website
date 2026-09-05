const shopNowButton = document.getAnimationsById("shop-now");

if (shopNowButton) {

    shopNowButton.addEventListener("click", function () {

        document.getElementById("products").scrollIntoView ({
            behavior: "smooth"
        });
    });
}

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

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {

    const cartCountDisplay =
        document.getElementById("cart-count");

    if (!cartCountDisplay) {
        return;
    }

    let totalQuantity = 0;

    cart.forEach(function (item) {

        totalQuantity += item.quantity;
    });

    cartCountDisplay.textContent = 
        totalQuantity;

}

const addCartButtons = 
    document.querySelectorAll(".add-cart");

addCartButtons.forEach(function(button, index) {

    button.addEventListener("click", function() {

        const product = products[index];

        const existingProduct = 
            cart.find(function (item) {

                return item.id === product.id;
            });

        if (existingProduct) {

            existingProduct.quantity++;
        } else {

            cart.push ({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });

        }

        localStorage.setItam (
            "cart",
            JSON.stringify(cart)
        );

        updateCartCount();

        button.textContent = 
            "Added ✓";

    setTimeout(function () {
        button.textContent = 
            "Add to Cart";
    }, 1000);

    });

});

updateCartCount();