const shopNowButton = document.getAnimationsById("shop-now");

shopNowButton.addEventListener("click", function () {
    document.getElementById("products").scrollIntoView ({
        behavior: "smooth"
    });
});