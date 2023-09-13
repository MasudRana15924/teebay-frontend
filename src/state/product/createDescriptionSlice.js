import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    description: localStorage.getItem("description")
    ? JSON.parse(localStorage.getItem("description"))
    : [],
};

const storeTypeSlice = createSlice({
    name: "description",
    initialState,
    reducers: {
        adddescriptionToStore(state, action) {
            state.description=action.payload;
            localStorage.setItem("description", JSON.stringify(state.description));

        },
        clearDescStore(state,) {
            state.description = [];
            localStorage.setItem("description", JSON.stringify(state.description));
        },
    },
});

export const {adddescriptionToStore, clearDescStore } =
storeTypeSlice.actions;

export default storeTypeSlice.reducer;