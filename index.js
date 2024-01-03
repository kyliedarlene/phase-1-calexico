// Write your code here...

const menuItems = document.getElementById('menu-items');
const dishImage = document.getElementById('dish-image');
const dishName = document.getElementById('dish-name');
const dishDescription = document.getElementById('dish-description');
const dishPrice = document.getElementById('dish-price');

const form = document.getElementById('cart-form');
const cartNumDisplay = document.getElementById('number-in-cart');

fetch("http://localhost:3000/menu")
    .then((response) => response.json())
    .then((menu) => {
        menu.forEach((item) => {
            // challenge 1
            const newMenuItem = document.createElement('span');
            newMenuItem.innerText = item.name;
            menuItems.append(newMenuItem);

            // challenge 2
            displayMenuItem(menu[0]);

            // challenge 3
            newMenuItem.addEventListener('click', () => {
                displayMenuItem(item);
                cartNumDisplay.innerText = 0;
            })
        })
    })

function displayMenuItem(source) {
    dishImage.src = source.image;
    dishName.innerText = source.name;
    dishDescription.innerText = source.description;
    dishPrice.innerText = source.price;
}

// challenge 4



form.addEventListener('submit', (event) => {
    event.preventDefault();
    const cartNumAsNum = Number(cartNumDisplay.innerText);
    const addToCartNum = Number(event.target.number.value);
    cartNumDisplay.innerText = cartNumAsNum + addToCartNum;
})