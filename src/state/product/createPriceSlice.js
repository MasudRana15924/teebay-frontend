import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   price: localStorage.getItem("price")
    ? JSON.parse(localStorage.getItem("price"))
    : [],
    rentprice: localStorage.getItem("rentprice")
    ? JSON.parse(localStorage.getItem("rentprice"))
    : [],
    rentType: localStorage.getItem("rentType")
    ? JSON.parse(localStorage.getItem("rentType"))
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
        addrentpriceToStore(state, action) {
            state.rentprice=action.payload;
            localStorage.setItem("rentprice", JSON.stringify(state.rentprice));

        },
        addrenttypeToStore(state, action) {
            state.rentType=action.payload;
            localStorage.setItem("rentType", JSON.stringify(state.rentType));

        },
        clearPriceStore(state,) {
            state.price = [];
            state.rentprice = [];
            state.rentType = [];
            localStorage.setItem("price", JSON.stringify(state.price));
            localStorage.setItem("rentprice", JSON.stringify(state.rentprice));
            localStorage.setItem("rentType", JSON.stringify(state.rentType));
        },
    },
});

export const { addpriceToStore,addrentpriceToStore,addrenttypeToStore, clearPriceStore } =
storeTypeSlice.actions;

export default storeTypeSlice.reducer;