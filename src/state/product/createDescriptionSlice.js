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
        clearStore(state,) {
            state.description = [];
            localStorage.setItem("description", JSON.stringify(state.description));
        },
    },
});

export const {adddescriptionToStore, clearStore } =
storeTypeSlice.actions;

export default storeTypeSlice.reducer;