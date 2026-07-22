import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './axiosBaseQuery';

// Single entry point for RTK Query APIs
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: ['User'], // Define cache tags here
  endpoints: () => ({}), // Endpoints will be injected from features
});
