import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    wishlistItems: [],
};

export const wishlistSlice =  createSlice({
    name: 'wishlist',
    initialState,

    reducers: {
        addToWishlist: (state, action) => {
            const productNotInWishlist = !state.wishlistItems.some(
                (item) => item.id === action.payload.id
                );

                if (productNotInWishlist) {
                    state.wishlistItems.push(action.payload)
                }
        },

        removeFromWishList: (state, action) => {
            state.wishlistItems = state.wishlistItems.filter(
                (item) => item.id !== action.payload
            );
        },
    },
});

export const {addToWishlist, removeFromWishList} = wishlistSlice.actions;
export default wishlistSlice.reducer