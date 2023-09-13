import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { privateGet } from '../utilities/apiCaller';


export const fetchmyRentProducts = createAsyncThunk(
    'user/myproduct',
    async ({userToken}, { rejectWithValue }) => {
        const products = await privateGet('/my/rent/list',userToken);
        return products;
    }
);
export const myrentproductssSlice = createSlice({
    name: 'My Rent products',
    initialState:{
        myrentproducts: [],
        isLoading: false,
        isError: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchmyRentProducts.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchmyRentProducts.fulfilled, (state, action) => {
                state.myrentproducts = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchmyRentProducts.rejected, (state, action) => {
                state.isLoading = true
                state.myrentproducts = [];
                state.isError = true;
                state.error = action.payload.error?.message;
            })
    }
});

export default myrentproductssSlice.reducer;