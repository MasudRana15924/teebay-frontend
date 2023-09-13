import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    category: localStorage.getItem("category")
    ? JSON.parse(localStorage.getItem("category"))
    : [],
};

const storeTypeSlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        addcategoryToStore(state, action) {
            state.category=action.payload;
            localStorage.setItem("category", JSON.stringify(state.category));

        },
        clearStore(state,) {
            state.category = [];
            localStorage.setItem("category", JSON.stringify(state.category));
        },
    },
});

export const {addcategoryToStore, clearStore } =
storeTypeSlice.actions;

export default storeTypeSlice.reducer;