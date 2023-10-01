import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    cartItems: [],
    user: "userLogged",
    updatedAt: Date.now().toLocaleString(),
    total: null
}

export const cartSlice = createSlice({

    name: 'cart',
    initialState,

    reducers: {

        addToCart: (state, action) => {

            const productRepeated = state.cartItems.find(
                item => item.id === action.payload.id
                )

            if(productRepeated){
                const itemsUpdated = state.cartItems.map(item => {
                    if(item.id === action.payload.id){
                        item.quantity += action.payload.quantity
                        return item
                    }
                    return item
                })
                const total = itemsUpdated.reduce(
                    (acc, current) => (acc += current.price * current.quantity), 0
                )
                state = {
                    ...state,
                    cartItems: itemsUpdated,
                    total,
                    updatedAt: new Date().toLocaleString()
                }
            } else {
                state.cartItems.push(action.payload)
                const total = state.cartItems.reduce(
                    (acc, current) => (acc += current.price * current.quantity), 0  
                )
                state = {
                    ...state,
                    total,
                    updatedAt: new Date().toLocaleString(),
                }
            }

            
        },

        removeFromCart: (state,action) => {}
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer