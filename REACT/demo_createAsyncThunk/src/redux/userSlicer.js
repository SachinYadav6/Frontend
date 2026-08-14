import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json();
        return data
          
    }
) 

export const userSlicer = createSlice({
    name: "users",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        }),
            builder.addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            }),
            builder.addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    },
    
});
export default userSlicer.reducer;