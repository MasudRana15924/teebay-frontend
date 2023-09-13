import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { privatePost } from '../utilities/apiCaller';


export const createProduct = createAsyncThunk(
    'product/createProduct',
    async ({ data, userToken },{ rejectWithValue }) => {
        
        try {
            const product = await privatePost('/create/product',userToken, data);
            return product;
          } catch (err) {
            return rejectWithValue(err.response.data.message);
          }
    }
);
export const productSlice = createSlice({
    name: 'product',
    initialState:{
        product: [],
        isLoading: false,
        isError:false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(createProduct.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.product = action.payload;
                state.isLoading = false
                
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.isLoading = true
                state.product = [];
                state.isError = true;
            })
    }
});

export default productSlice.reducer;