import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./counterSlicer";
import  userSlicer  from "./userSlicer";
export const store = configureStore({
    reducer: {
        counter: countReducer,
        users:userSlicer,
    },
    
})

