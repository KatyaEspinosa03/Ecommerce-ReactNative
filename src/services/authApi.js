import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { apiKey, authUrl } from "../firebase";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: authUrl}),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: ({...auth}) => ({
                url: `accounts:signUp?Key=${apiKey}`,
                method: 'POST',
                body: auth
            })
        })
    })
})
