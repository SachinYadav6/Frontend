import { configureStore } from "@reduxjs/toolkit";
import productSlicer  from "./productsSlice";
export const store = configureStore({
    reducer: {
        products: productSlicer,
      
    }
});
