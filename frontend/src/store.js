import { configureStore } from "@reduxjs/toolkit";
import {apiSlice} from './slices/apiSlice';
import cartSliceReducer from './slices/cartSlice';
import authSliceReducer from "./slices/authSlice";

// Configure Redux store
const store = configureStore({
     // Define reducers
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer, // Using the reducer from the imported API slice
        cart: cartSliceReducer,
        auth: authSliceReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware), // Adding middleware for handling API requests
     // Enable Redux DevTools for debugging
    devTools: true,
});

export default store;

