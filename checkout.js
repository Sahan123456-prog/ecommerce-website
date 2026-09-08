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

function dispalyOrder() {

    checkoutItems.innerHTML = "";

    let total = 0;
    let totalQuantity = 0;

    if(cart.length === 0) {

        checkoutItems.innerHTML = 
            "<p>Your cart is empty.</p>";

        checkoutTotal.textContent = "0";
        cartCount.textContent = "0";

        return;

    }

    cart.forEach(function(item) {

        total += item.price * item.quantity;

        totalQuantity += item.quantity;

        const orderItem = 
            document.createElement("div");

        orderItem.classList.add(
            "checkout-item"
        );

        orderItem.innerHTML = `

            <div>

                <h4>
                    ${item.name}
                </h4>

                <p>
                    $${item.price}
                    ×
                    ${item.quantity}
                </p>

            </div>

            <strong>
                $${item.price * item.quantity}
            </strong>

        `;

        checkoutItems.appendChild(
            orderItem
        );

    });

    checkoutTotal.textContent = 
        total;

    cartCount.textContent = 
        totalQuantity;
        
}