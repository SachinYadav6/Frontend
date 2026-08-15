import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
export const ProductThunkCreate = createAsyncThunk("products/productData", 
    async () => {
        const data = await axios.get("https://dummyjson.com/products");
    return data.data.products;
        
    
})

export const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        cart:[],
        loading:false,
         error:null,
    },
    reducers: {
        addProducts: (state, action) => {
            state.products = action.payload;
        },
        addToCart: (state, action) => {
            const existingProduct = state.cart.find(
                (item) => item.id === action.payload.id
            );

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.cart.push({
                    ...action.payload,
                    quantity: 1
                });
            }
          
        },
        incrementQuantity: (state, action) => {
            const product = state.cart.find(
                (item) => item.id === action.payload
            );

            if (product) {
                product.quantity += 1;
            }

        },
        decrementQuantity: (state, action) => {
            const product = state.cart.find(
                (item) => item.id === action.payload
            );

            if (product) {
                if (product.quantity > 1) {
                    product.quantity -= 1;
                } else {
                    state.cart = state.cart.filter(
                        (item) => item.id !== action.payload
                    );
                }
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(
                (item) => item.id !== action.payload
            );
        },
       
    },
    extraReducers: (builder) => {
        builder
            .addCase(ProductThunkCreate.pending, (state) => {
                state.loading = true;
            })
            .addCase(ProductThunkCreate.fulfilled, ((state, action) => {
                state.loading = false;
                state.products=action.payload
            }))
            .addCase(ProductThunkCreate.rejected, ((state, action) => {
                state.loading = false
                state.error = action.error.message;
                state.products = action.payload
               
            }
        ))
            
    }
    
})

export const { addToCart,addProducts,incrementQuantity,decrementQuantity,removeFromCart } = productSlice.actions;
export default productSlice.reducer;