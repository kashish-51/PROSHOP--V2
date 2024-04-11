import { PRODUCTS_URL, UPLOAD_URL } from "../constants";
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
            providesTags: ['Products'], //otherwise you may have to refresh the page to see result
            keepUnusedDataFor:5   // Specify the duration to keep unused data in cache (5 seconds)
        }),
        getProductDetails: builder.query({
            query:(productId) => ({
                url: `${PRODUCTS_URL}/${productId}`,
            }),
            keepUnusedDataFor:5,
        }),
        createProduct: builder.mutation({
            query: ()=> ({
                url:PRODUCTS_URL,
                method: 'POST',
            }),
            invalidatedTags: ['Product'], //it will stop it being cached so that we will have fresh data.
        }),
        updateProduct: builder.mutation({
            query: (data) => ({
              url: `${PRODUCTS_URL}/${data.productId}`,
              method: 'PUT',
              body: data,
            }),
            invalidatesTags: ['Products'],
          }),
          uploadProductImage: builder.mutation({
            query: (data) => ({
              url: `/api/upload`,
              method: 'POST',
              body: data,
            }),
         
          }),

        deleteProduct: builder.mutation({
            query:(productId) => ({
                url:`${PRODUCTS_URL}/${productId}`,
                method: 'DELETE',
            }),
        })          
    }),
});

// Export the 'useGetProductsQuery' hook for accessing the 'getProducts' endpoint
export const {useGetProductsQuery,
     useGetProductDetailsQuery, 
    useCreateProductMutation,
    useUpdateProductMutation,
    useUploadProductImageMutation,
    useDeleteProductMutation,
} = productApiSlice;

