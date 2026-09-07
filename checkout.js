let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

const checkoutItems =
    document.getElementById("checkout-items");

const checkoutTotal =
    document.getElementById("checkout-total");

const cartCount =
    document.getElementById("cart-count");

const checkoutForm =
    document.getElementById("checkout-form");