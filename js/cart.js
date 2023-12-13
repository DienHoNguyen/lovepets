import { pets } from '../js/product.js'
export const cart = [{
    petId:'a1',
    quantity: 100,
},{
    petId:'a6',
    quantity: 1,
}];

 export function addToCart(petId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (petId === cartItem.petId) {
            matchingItem = cartItem;
        }
    });

    if (matchingItem){
        matchingItem.quantity += 1;

    } else {
        cart.push({
            petId: petId,
            quantity: 1
        });
    }
}