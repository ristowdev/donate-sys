import apiBaseSlice from "../../../api";

export const FundraisersApiSlices = apiBaseSlice.injectEndpoints({
  endpoints: (builder) => ({
 
    getFundraisers: builder.query({
      query: () => ({
        url: `/global/get-all-fundraisers`,
        method: "GET", 
      }),
    }), 

    getFundraiser: builder.query(({
      query: (id) => ({
        url: `/global/get-fundraiser/${id}`,
        method: "GET",
      }),
    })),

  }),
});

export const { 
    useGetFundraisersQuery,
    useGetFundraiserQuery
} = FundraisersApiSlices;