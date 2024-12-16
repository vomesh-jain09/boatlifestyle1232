import React from "react";
import {createSlice} from "@reduxjs/toolkit"
const initialState={
    cartItem:[],
    cartTotalQuantity:0,
    cartTotalPrice:0
}

const Cartslice= createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addTocart(state,action){
           state.cartItem.push(action.payload);
        },
    },
})


export const{addTocart}=Cartslice.actions;

export default Cartslice.reducer;

