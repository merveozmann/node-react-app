import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: 0,
        totalvalue:0,
        totalPrice:0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement:(state)=>{
            state.value -=1
        },
        addProduct:(state,action)=>{
            state.totalvalue=state.value
            state.totalPrice = state.value*action.payload.price
        }
    }

})
export const {increment,decrement,addProduct}=cartSlice.actions

export default cartSlice.reducer