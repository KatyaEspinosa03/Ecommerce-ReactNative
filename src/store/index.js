import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice'
import shopSlice from '../features/shop/shopSlice'
import cartSlice from '../features/cart/cartSlice'
import authSlice from '../features/auth/authSlice'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { shopApi } from '../services/shopAPI'
import { authApi } from '../services/authApi'
import wishlistSlice from '../features/wishList/wishlistSlice'

const store = configureStore({
  reducer: {
    // para usar todo lo implementado en counterSlice se utilizara el nombre de counter
    counter: counterSlice,
    shop: shopSlice,
    wishlist: wishlistSlice,
    [shopApi.reducerPath]: shopApi.reducer,
    cart: cartSlice,
    [authApi.reducerPath]: authApi.reducer,
    auth: authSlice,
  },
  //middleware es la forma en la que viajan las peticiones entre el usuario y el servidor.
  middleware: getDefaultMiddleWare => 
    getDefaultMiddleWare().concat(shopApi.middleware, authApi.middleware)
})

setupListeners(store.dispatch)

export default store 