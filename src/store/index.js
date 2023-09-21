import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    // para usar todo lo implementado en counterSlice se utilizara el nombre de counter
    counter: counterSlice
  },
})