export const addDecimals = (num) => {
    return (Math.round(num *100) / 100).toFixed(2);
}

export const updateCart = (state) => {
     //calculate items price
     state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0) )
     //  the accumulator, initially set to 0. It accumulates the total price of all items.
     //  The reduce function is a built-in method in JavaScript used to iterate over an array and accumulate a single value based on the elements of that array.

    //calculate shipping price(if order is over $100 then free, else $10 shipping)
    state.shippingPrice = addDecimals(state.itemsPrice >100 ? 0 : 10);

     //calculate tax price(15% tax)
    state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));

     //calculate total price
     state.totalPrice = (
     Number(state.itemsPrice) +
     Number(state.shippingPrice) +
     Number(state.taxPrice)
).toFixed(2);

localStorage.setItem('cart',   JSON.stringify(state))
//'cart': This is the key under which the data will be stored in the local storage.
//JSON.stringify(state): This converts the state object into a JSON string. 

return state;
}