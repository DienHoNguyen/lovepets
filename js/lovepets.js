import {cart, addToCart} from '../js/cart.js'
import {cart2, addToCart2} from '../js/cart2.js'
import {pets} from '../js/product.js'
import {products} from '../js/product2.js'


let petsHTML = '';

pets.forEach((pet) => {
    petsHTML += `
    <div class="column">
        <div class="card">
        <img src="${pet.image}" style="width:100%">
        <h1>${pet.name}</h1>
        <p class="price">${pet.price} vn₫</p>
        <p>Miêu tả</p>
        <p><button class="js-add-to-cart"
        data-pet-id = ${pet.id}>Thêm vào giỏ hàng</button></p>
        </div>
    </div>
    `;

} );

let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
    <div class="column">
        <div class="card">
        <img src="${product.image}" style="width:100%">
        <h1>${product.name}</h1>
        <p class="price">${product.price} vn₫</p>
        <p>Miêu tả</p>
        <p><button class="js-add-to-cart"
        data-pet-id = ${product.id}>Thêm vào giỏ hàng</button></p>
        </div>
    </div>
    `;

} );


document.querySelector('.js-pets').innerHTML = petsHTML;



function updateCartQuantity() {
    let cartQuantity = 0;

        cart.forEach((cartItem) => {
            cartQuantity += cartItem.quantity
        });

        document.querySelector('.js-cart-quantity')
            .innerHTML = cartQuantity;

        console.log(cartQuantity)

        console.log(cart);
}

document.querySelectorAll('.js-add-to-cart')
.forEach((button) => {
    button.addEventListener('click', () => {
        const petId = button.dataset.
        petId;

        addToCart(petId);
        updateCartQuantity();
        
    });
});