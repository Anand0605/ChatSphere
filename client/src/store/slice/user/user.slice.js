import { createSlice } from '@reduxjs/toolkit'
import { loginUserThunk } from './user.thunk';

const initialState = {
  isAuthenticated: false,
  screenLoading: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
     
    },
    extraReducers: (builder) => {
      builder.addCase(loginUserThunk.pending, (state, action) => {
          console.log("pending");
      });
      builder.addCase(loginUserThunk.fulfilled, (state, action) => {
        console.log("fulfilled");
    });
    builder.addCase(loginUserThunk.rejected, (state, action) => {
      console.log("rejected");
  });
  },
  });
  

// Action creators are generated for each case reducer function
export const {  } = userSlice.actions

export default userSlice.reducer