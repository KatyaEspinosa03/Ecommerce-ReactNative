import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    cartItems: [],
    user: "userLogged",
    updatedAt: Date.now().toLocaleString(),
    total: 0,
}

export const cartSlice = createSlice({

    name: 'cart',
    initialState,

    reducers: {

        addToCart: (state, action) => {
            const productRepeated = state.cartItems.find(
                item => item.id === action.payload.id
                )

                let updatedCartItems;

            if(productRepeated){
                state.cartItems = state.cartItems.map(item => {
                    if(item.id === action.payload.id){
                        item.quantity += action.payload.quantity;
                        
                    }
                    return item;
                });
            } else {
                state.cartItems.push(action.payload)
            }

            state.total = state.cartItems.reduce(
                (acc, current) => (acc += current.price * current.quantity), 0
            )
           state.updatedAt = new Date().toLocaleDateString();
            
        },

        removeFromCart: (state,action) => {
            const itemToRemove = state.cartItems.findIndex((item) => 
            item.id == action.payload);

            if (itemToRemove !== -1) {

                const updatedCartItems = state.cartItems.filter(
                    (item, index) =>  index !== itemToRemove
                )
                // state.cartItems.splice(itemToRemove, 1);

                const total = updatedCartItems.reduce(
                    (acc,current) => acc + current.price * current.quantity, 0
                );

                return {
                    ...state,
                    cartItems: updatedCartItems,
                    total,
                    updatedAt: new Date().toLocaleString()
                };
            }     
        },

        emptyCart: (state) => {
            
            return {
                ...state,
                cartItems: [],
                total: 0,
                updatedAt: new Date().toLocaleString()
            }
        }
    }

   
})

export const {addToCart, removeFromCart, emptyCart} = cartSlice.actions
export default cartSlice.reducer