import {cart2, addToCart2} from '../js/cart2.js'
import {products} from '../js/product2.js'


let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
    <div class="column">
        <div class="card">
        <img src="${product.image}" style="width:100%">
        <h1>${product.name}</h1>
        <p class="price">${product.price} vn₫</p>
        <p>${product.description}</p>
        <p><button class="js-add-to-cart"
        data-pet-id = ${product.id}>Thêm vào giỏ hàng</button></p>
        </div>
    </div>
    `;

} );


document.querySelector('.js-pets-2').innerHTML = productsHTML;



function updateCartQuantity() {
    let cartQuantity = 0;

        cart2.forEach((cartItem) => {
            cartQuantity += cartItem.quantity
        });

        document.querySelector('.js-cart-quantity')
            .innerHTML = cartQuantity;

        console.log(cartQuantity)

        console.log(cart2);
}

document.querySelectorAll('.js-add-to-cart')
.forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.
        productId;

        addToCart2(productId);
        updateCartQuantity();
        
    });
});