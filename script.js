
let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;

    document.getElementById("cartCount").innerText = cart.length;

    displayCart();
}

function displayCart() {
    let list = document.getElementById("cartItems");
    list.innerHTML = "";

    cart.forEach(function(item) {
        let li = document.createElement("li");
        li.innerText = item.name + " - ₹" + item.price;
        list.appendChild(li);
    });

    document.getElementById("total").innerText =
        "Total: ₹" + total;
}

function searchBooks() {
    let input = document.getElementById("search").value.toLowerCase();
    let books = document.querySelectorAll(".book");

    books.forEach(function(book) {
        let title = book.querySelector("h3").innerText.toLowerCase();

        if (title.includes(input)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
}
