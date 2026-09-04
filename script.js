const shopNowButton = document.getAnimationsById("shop-now");

shopNowButton.addEventListener("click", function () {
    document.getElementById("products").scrollIntoView ({
        behavior: "smooth"
    });
});

let cartCount = 0;

const cartCountDisplay = document.getElementById("cart-count");

const addCartButtons = document.getElementsByClassName(".add-cart");