export const cart2 = [{
    productId:'a0',
    quantity: 2,
},{
    petId:'a6',
    quantity: 1,
}];

 export function addToCart2(productId) {
    let matchingItem;

    cart2.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    if (matchingItem){
        matchingItem.quantity += 1;

    } else {
        cart2.push({
            productId: productId,
            quantity: 1
        });
    }
}