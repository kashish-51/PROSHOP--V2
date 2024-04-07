import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice"; // Importing the API slice setup
export const usersApiSlice = apiSlice.injectEndpoints({
    // Define endpoints for the API slice
    endpoints: (builder) => ({
       login: builder.mutation({
    // mutation because we are making post requst
            query:(data)=>({   //we are sendng data to our endpoints
                url:`${USERS_URL}/auth`,
                method:'POST',
                body:data,  
            }),
        }), 
        register:builder.mutation({
          query: (data) => ({
            url: `${USERS_URL}`,
            method:'POST',
            body:data,
          }),
        }),
        logout: builder.mutation({
            query:()=> ({
                url:`${USERS_URL}/logout`,
                method:'POST',
            }),
        }),
        profile: builder.mutation({
            query:(data) => ({
                url: `${USERS_URL}/profile`, 
                method: 'PUT',
                body: data,
            })
        })
    }),
});
export const {useLoginMutation,
     useLogoutMutation,
      useRegisterMutation,
    useProfileMutation} = usersApiSlice;

