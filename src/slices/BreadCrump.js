import { createSlice } from '@reduxjs/toolkit'

export const BreadCrump = createSlice({
  name: 'Bread',
  initialState: {
    workingvalue: null,
   prevvalue:null,
   currentvalue:null,
   
  },
  reducers: {
   activeButton: (state, action) => {
    // console.log(state.value);
    // console.log(action.payload);
    state.workingvalue=state.prevvalue
    state.prevvalue=state.currentvalue
    state.currentvalue=action.payload
   
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { activeButton } = BreadCrump.actions

export default BreadCrump.reducer