import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { privateGet } from '../utilities/apiCaller';


export const fetchmyProducts = createAsyncThunk(
    'user/myproduct',
    async ({userToken}, { rejectWithValue }) => {
        const products = await privateGet('/my/product',userToken);
        return products;
    }
);
export const myproductssSlice = createSlice({
    name: 'My products',
    initialState:{
        myproducts: [],
        isLoading: false,
        isError: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchmyProducts.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchmyProducts.fulfilled, (state, action) => {
                state.myproducts = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchmyProducts.rejected, (state, action) => {
                state.isLoading = true
                state.myproducts = [];
                state.isError = true;
                state.error = action.payload.error?.message;
            })
    }
});

export default myproductssSlice.reducer;