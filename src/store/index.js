import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice'
import shopSlice from '../features/shop/shopSlice'
import cartSlice from '../features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    // para usar todo lo implementado en counterSlice se utilizara el nombre de counter
    counter: counterSlice,
    shop: shopSlice,
    cart: cartSlice
  },
})