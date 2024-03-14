import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice"; // Importing the API slice setup

// Define the product API slice
export const productApiSlice = apiSlice.injectEndpoints({
    // Define endpoints for the API slice
    endpoints: (builder) => ({
    // Define a 'getProducts' query endpoint
        getProducts: builder.query({
    // Define the query configuration
            query:()=>({
                url:PRODUCTS_URL,  // Specify the URL to fetch products from
            }),
            keepUnusedDataFor:5   // Specify the duration to keep unused data in cache (5 seconds)
        }),
        getProductDetails: builder.query({
            query:(productId) => ({
                url: `${PRODUCTS_URL}/${productId}`,
            }),
            keepUnusedDataFor:5,
        })
    }),
});

// Export the 'useGetProductsQuery' hook for accessing the 'getProducts' endpoint
export const {useGetProductsQuery, useGetProductDetailsQuery} = productApiSlice;

