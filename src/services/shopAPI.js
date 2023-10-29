import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import { baseUrl } from '../firebase'

export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: builder => ({
    getCategories: builder.query({
        query: () => 'categories.json'
    }),
    getProducts: builder.query ({
        query: () => 'products.json'
    }),
    //filtrar productos por la cateogria seleccionada.
    getProductsByCategory: builder.query({
        query: category => `products.json?orderBy="category"&equalTo="${category}"`
    }),
    postOrder: builder.mutation({
        query: ({...order}) => ({
            url: 'orders.json',
            method: 'POST',
            body: order,
        }),
    }),
    getOrders: builder.query({
            query: () => `orders.json`,
        }),
    
    postWishlist: builder.mutation({
        query: ({...wishlist}) => ({
            url: 'wishlist.json',
            method: 'POST',
            body: wishlist,
        }),    
    }),
    removeFromWishlist: builder.mutation({
        query: ({ itemKey }) => ({
            url: `wishlist/${itemKey}.json`,
            method: 'DELETE',
        })
    }),
    getWishList: builder.query({
        query: () => `wishlist.json`
    }),
    getProfileImage: builder.query({
        query: localId =>  `profileImages/${localId}.json`
    }),
    postProfileImage: builder.mutation({
        query: ({image, localId}) => ({
            url: `profileImages/${localId}.json`,
            method: 'PUT',
            body: {
                image: image,
            }
        })
    })
   }),
})

export const {
    useGetCategoriesQuery,
    useGetProductsQuery,
    useGetProductsByCategoryQuery,
    usePostOrderMutation,
    useGetProfileImageQuery,
    usePostProfileImageMutation,
    useGetOrdersQuery,
    usePostWishlistMutation,
    useGetWishListQuery,
    useRemoveFromWishlistMutation,
} = shopApi