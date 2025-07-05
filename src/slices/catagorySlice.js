
import { createSlice } from '@reduxjs/toolkit'

export const catagorySlice = createSlice({
  name: 'catagory',
  initialState: {
    value: false,
  },
  reducers: {
    catagoryFunction: (state, action) => {
   state.value=action.payload
      
    },
    
      
   
  
  },
})

// Action creators are generated for each case reducer function
export const {  catagoryFunction } = catagorySlice.actions

export default catagorySlice.reducer