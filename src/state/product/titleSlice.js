import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   title: localStorage.getItem("title")
    ? JSON.parse(localStorage.getItem("title"))
    : [],
 
};

const storeTypeSlice = createSlice({
    name: "title",
    initialState,
    reducers: {
       
        addtitleToStore(state, action) {
            state.title=action.payload;
            localStorage.setItem("title", JSON.stringify(state.title));

        },
        clearStore(state,) {
            state.title = [];
            localStorage.setItem("title", JSON.stringify(state.title));
        },
    },
});

export const { addtitleToStore, clearStore } =
storeTypeSlice.actions;

export default storeTypeSlice.reducer;