import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,

}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    //Los reducers son las funciones a ejecutar 
    reducers: {
        increment: (state, action) => {
            const productId = action.payload
            if (!state[productId]) {
                state[productId] = 0
            }
            state[productId] +=1
        },
        decrement: (state, action) => {
            const productId = action.payload
            if(state[productId] && state[productId] > 0){
                state[productId] -=1
            }
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})
    // Se exportan las funciones del reducer y el reducer
export const {increment, decrement, incrementByAmount} = counterSlice.actions

export default counterSlice.reducer