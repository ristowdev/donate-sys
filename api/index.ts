import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../config';

const baseQuery = fetchBaseQuery({
    // baseUrl: "http://localhost:5001/api",
  // baseUrl: "http://192.168.1.7:5001/api",192.168.88.88
  baseUrl: BASE_URL,
  // baseUrl: "https://f47d-95-180-198-7.eu.ngrok.io/api",

  // baseUrl: "https://dev.powerview.com.mk/api",
  // baseUrl: "https://10.10.2.231:443/api",
  // baseUrl: "https://10.10.2.231:443/api",192.168.88.244
  // baseUrl: "http://192.168.88.244:5001/api",
  // baseUrl: "https://api.power-view.org/api",
  // mode: "cors",
  // prepareHeaders: (headers) => {
  //   headers.set('Access-Control-Allow-Origin', '*')  
  //   // headers.set('Access-Control-Allow-Methods', 'GET') //
  //   // headers.set('Access-Control-Allow-Headers', '*') //
  //   return headers
  // }, 
});

export default createApi({
  reducerPath: 'BaseApi',
  baseQuery,
//   tagTypes: ['Services', 'Locations'],
  endpoints: () => ({}),
});
