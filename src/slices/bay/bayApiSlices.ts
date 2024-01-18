import apiBaseSlice from "../../../api";

export const BayApiSlices = apiBaseSlice.injectEndpoints({
  endpoints: (builder) => ({
 
    getBaysWithElementsBySubstation: builder.query({
      query: ([substationId, token]) => ({
        url: `/Bay/GetBaysWithElementsBySubstation?substationId=${substationId}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    
    getBayIssues: builder.query({
      query: ([id, token]) => ({
        url: `/Element/get-element-issues?elementId=${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }), 

    getBayElStatuses: builder.query({
        query: ([id, token]) => ({
        url: `/Element/get-element-status?elementId=${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),


  }),
});

export const { 
    useGetBaysWithElementsBySubstationQuery,
    useGetBayIssuesQuery,
    useGetBayElStatusesQuery
} = BayApiSlices;