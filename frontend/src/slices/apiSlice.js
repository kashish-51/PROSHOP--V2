import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../constants';

const baseQuery = fetchBaseQuery({baseUrl:BASE_URL});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['Product', 'Order', 'User'],
          // used to define data that we are fetching from api
    endpoints: (builder) => ({}),
});
