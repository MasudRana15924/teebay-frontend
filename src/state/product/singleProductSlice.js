import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { publicGetSingle } from '../utilities/apiCaller';


const initialState = {
    product:{},
    isLoading: false,
    isError: false,
    error: ''
}
export const fetchProductDetails = createAsyncThunk(
    'product/fetchproduct',
    async (id) => {
        const product = await publicGetSingle(`/product/${id}`);
        return product
    }
);
export const productDetailsSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchProductDetails.pending,(state)=>{
            state.isError=false;
           state.isLoading=true
        })
        .addCase(fetchProductDetails.fulfilled,(state,action)=>{
          state.isLoading=false
          state.product=action.payload;
        })
        .addCase(fetchProductDetails.rejected,(state,action)=>{
            state.isLoading=false
            state.product={};
            state.isError=true;
            state.error=action.error?.message;
        })
    }
});

export default productDetailsSlice.reducer;