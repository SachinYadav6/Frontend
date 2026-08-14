import { createSlice } from "@reduxjs/toolkit";
import { use } from "react";

export const userSlicer = createSlice({
    name: "users",
    initialState: {

        name: "sachin kumar",
        age: 21,
    },
    reducers: {
        changeName: (state,action) => {
            state.name = action.payload;
            
        },
        inncrementAge: (state) => {
            state.age += 1;
        },
    },
});
export const { changeName, inncrementAge } = userSlicer.actions;
export default userSlicer.reducer;