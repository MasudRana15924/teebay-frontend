import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { privatePost } from "../utilities/apiCaller";



const initialState = {
    rent: [],
    isLoading: false,
    isError: false,
    error: ''
}

export const createRent = createAsyncThunk(
    'rent/createRent', async ({ data,userToken}, { rejectWithValue }) => {

        try {
            const rent = await privatePost('/create/rent',userToken, data);
            return rent;
        } catch (err) {
            return rejectWithValue(err);
        }


    });

const createrentSlice = createSlice({
    name: 'rent',
    initialState,
    extraReducers: (builder) => {

        builder.addCase(createRent.pending, (state, action) => {
            state.isLoading = true;
            state.isError = true
        });
        builder.addCase(createRent.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.rent.push(action.payload);
        });
        builder.addCase(createRent.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        });
    }
});

export default createrentSlice.reducer; 