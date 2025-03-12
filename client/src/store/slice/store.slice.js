import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}



export const userSlice = createSlice({
    name: "user",
    initialState: {
      isAuthenticated: false,
    },
    reducers: {
      // Reducers will be added here
    },
  });
  

// Action creators are generated for each case reducer function
export const { Login } = userSlice.actions

export default userSlice    .reducer