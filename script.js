const shopNowButton = document.getAnimationsById("shop-now");

shopNowButton.addEventListener("click", function () {
    document.getElementById("products").scrollIntoView ({
        behavior: "smooth"
    });
});

let cartCount = 0;

const cartCountDisplay = document.getElementById("cart-count");

const addCartButtons = document.getElementsByClassName(".add-cart");

addCartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        cartCount++;

        cartCountDisplay.textContent = cartCount;

        button.textContent = "Added ✓";

        setTimeout(function () {

            button.textContent = "Add to Cart";

        }, 1000);

    });

});