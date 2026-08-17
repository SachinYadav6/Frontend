import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk("products/fetchproducts",
    async () => {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        return data.products;
        
    
    });

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        loading: false,
        data:[],
        error: null,
        
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;

            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;

            })
        
        
    }
        
})
    export default productsSlice.reducer;