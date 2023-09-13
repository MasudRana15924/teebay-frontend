import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   price: localStorage.getItem("price")
    ? JSON.parse(localStorage.getItem("price"))
    : [],
 
};

const storeTypeSlice = createSlice({
    name: "price",
    initialState,
    reducers: {
       
        addpriceToStore(state, action) {
            state.price=action.payload;
            localStorage.setItem("price", JSON.stringify(state.price));

        },
        clearStore(state,) {
            state.price = [];
            localStorage.setItem("price", JSON.stringify(state.price));
        },
    },
});

export const { addpriceToStore, clearStore } =
storeTypeSlice.actions;

export default storeTypeSlice.reducer;