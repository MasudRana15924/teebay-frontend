import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { publicGet } from '../utilities/apiCaller';


export const fetchProduct = createAsyncThunk(
    'products/fetchproducts',
    async () => {
        const products = await publicGet('/get/all/products');
        return products;
    }
);
export const productsSlice = createSlice({
    name: 'products',
    initialState:{
        products: [],
        isLoading: false,
        isError: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.products = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.isLoading = true
                state.products = [];
                state.isError = true;
            })
    }
});

export default productsSlice.reducer;