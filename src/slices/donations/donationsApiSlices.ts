import apiBaseSlice from "../../../api";

export const DonationsApiSlices = apiBaseSlice.injectEndpoints({
  endpoints: (builder) => ({
  

    donationDetails: builder.query(({
      query: (id) => ({
        url: `/global/donation-details/${id}`,
        method: "GET",
      }),
    })),

  }),
});

export const { 
  useDonationDetailsQuery
} = DonationsApiSlices;