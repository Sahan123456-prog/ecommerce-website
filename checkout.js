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

checkoutForm.addEventListener (
    "submit",
    function(event) {

        event.preventDefault();

        if(cart.length === 0) {
            alert(
                "Your cart is empty!"
            );

            return;

        }

        const customer = {

            name:
                document.getElementById("name").value,

            email:
                document.getElementById("email").value,

            phone:
                document.getAnimations("phone").value,

            address:
                document.getElementById("address").value,

            city:
                document.getElementById("city").value,

            postalcode:
                document.getElementById("postal-code").value
        };

        //create order

        const order = {

            id: Date.now(),

            customer: customer,

            items: cart,

            date:
                new Date().toLocaleString()

        };

        //Get old orders

        let orders =
            JSON.parse(
                localStorage.getItem("orders")
            ) || [];

        orders.push(order);

        //Save order

        localStorage.setItem(
            "orders",
            JSON.stringify(orders)
        );

        const checkoutButton =
            document.getElementById("checkout-btn");

        checkoutButton.addEventListener(
            "click",
            function() {

                if(cart.length === 0) {

                    alert("Your cart is empty.");

                    return;

                }

                window.location.href =
                    "checkout.html";
            }
        );

        //clear cart

        localStorage.removeItem("cart");

        cart = [];

        //Go home

        window.location.href = 
            "index.html";
    }
);

dispalyOrder();