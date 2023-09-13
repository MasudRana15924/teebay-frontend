import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import { publicDelete } from "../utilities/apiCaller";




const initialState={
  deleteProduct:[],
    isLoading:false,
    isError:false,
    error:''
}

export const deleteProduct = createAsyncThunk(
    'delete/product', async (_id , { rejectWithValue }) => {

        try {
            const deleteProduct = await publicDelete(`/delete/products/${_id}`);
            return deleteProduct;
        } catch (err) {
            return rejectWithValue(err);
        }


    });
const deleteProductSlice=createSlice({
    name:'delete Product',
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(deleteProduct.pending, (state, action) => {
                state.isLoading = true;
                state.isError = true
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.deleteProduct.push(action.payload);
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message
            })
           
    }
});

export default deleteProductSlice.reducer; 