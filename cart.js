let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

const cartItems =
    document.getElementById("cart-items");

const cartTotal =
    document.getElementById("cart-total");

const cartCount =
    document.getElementById("cart-count");

function displayCart() {

    cartItems.innerHTML = "";

    let total = 0;

    let totalQuantity = 0;

    if(cart.length === 0) {

        cartItems.innerHTML =
            "<p class='empty-cart'>Your cart is empty.</p>";

        cartTotal.textContent = "0";

        cartCount.textContent = "0";

        return;

    }

    cart.forEach(function (item) {

        total +=
            item.price * item.quantity;

        totalQuantity +=
            item.quantity;

        const cartItem = 
            document.createElement("div");

        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `

            <img
                src="${item.image}"
                alt="${item.name}"
            >

            <div class="cart-item-info>

                <h3>
                    ${item.name}
                <h3>

                <p>
                    price: $${item.price}
                </p>

                <div class="quantity-controls">

                    <button 
                        onclick="decreaseQuantity(${item.id})">
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="increaseQuantity(${item.id})">
                        +
                    </button>

                </div>

            </div>

            <div class="cart-item-right">

                <p class="item-total">

                    $${item.price*item.quantity}
                </p>

                <button
                    class="remove-btn"
                    onclick="removeItem(${item.id})">

                    Remove

                </button>

            </div>

        `;

        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = 
        total;

    cartCount.textContent =
        totalQuantity;
        
}