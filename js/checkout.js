import {cart, addToCart} from '../js/cart.js'
import { pets } from '../js/product.js'


let cartsummaryHTML = '';

cart.forEach((cartItem) => {

    const petId = cartItem.petId

    let matchingpet;

    pets.forEach((pet) => {
        matchingpet = pet
    })
    cartsummaryHTML += 
    `<div class="cart-item-container">
    <div class="delivery-date">
      Thời điểm giao hàng: 02/01/2024
    </div>

    <div class="cart-item-details-grid">
      <img class="product-image"
        src="${matchingpet.image}">

      <div class="cart-item-details">
        <div class="product-name">
        ${matchingpet.name}
        </div>
        <div class="product-price">
        ${matchingpet.price}
        </div>
        <div class="product-quantity">
          <span>
            Số lượng: <span class="quantity-label">${cartItem.quantity}</span>
          </span>
          <span class="delete-quantity-link link-primary
          js-delete-link" data-product-id="${matchingpet.id}">
            Xóa
          </span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>
        <div class="delivery-option">
          <input type="radio" checked
            class="delivery-option-input"
            name="delivery-option-${matchingpet.id}">
          <div>
            <div class="delivery-option-date">
            02/01/2024
            </div>
            <div class="delivery-option-price">
              Miễn phí vận chuyển
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-1">
          <div>
            <div class="delivery-option-date">
            01/01/2024
            </div>
            <div class="delivery-option-price">
              23000vn₫ - Phí giao hàng
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${matchingpet.id}">
          <div>
            <div class="delivery-option-date">
            29/12/2023
            </div>
            <div class="delivery-option-price">
            23000vn₫ - Phí giao hàng
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
})


document.querySelector('.js-order-summary')
    .innerHTML = cartsummaryHTML;


document.querySelectorAll('.js-delete-link')
    .forEach((link) => {
        link.addEventListener('click', () => {
            const petId = link.dataset.petId;
            console.log(petId)
        })
        });
    
