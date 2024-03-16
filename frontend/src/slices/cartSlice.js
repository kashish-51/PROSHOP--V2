import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

// local storage can only hold strings.that's why we parse it to convert into js object
const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {cartItems: []}


const cartSlice = createSlice({
    name: "cart",
    initialState,
 //we will have all the functions related to cart in reducer object like add cart, remove cart etc
 reducers: {
    addToCart: (state, action) => { //state is just the current state of cart  and in action there is data inside payload which we can access by action.payload
  
        const item = action.payload;
        //x is current item in cart and if it matches to item id in payload then it simply means that the item exist in cart
        const existItem = state.cartItems.find((x) => x._id === item._id);

        if(existItem) {
            state.cartItems = state.cartItems.map((x) => x._id === existItem._id ? item : x)
        }else {
            state.cartItems = [...state.cartItems , item];  //we are not using .push becz state is immutable .with the help of spread operator we are making copy of array and also adding the new items
        }

       return updateCart(state);
    },

    //remove from kart function
    removeFromCart: (state, action)=>{
     state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);

     return updateCart(state);

    }
 },
});

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer