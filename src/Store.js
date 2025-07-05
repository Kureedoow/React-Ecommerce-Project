import { configureStore } from '@reduxjs/toolkit'
import CounterSlices from "./slices/CounterSlices"
import  BreadCrump  from './slices/BreadCrump'
import  catagorySlice  from './slices/catagorySlice'
export default configureStore({
  reducer: {
    nameCounter : CounterSlices,
    BreadCrump:BreadCrump,
    catagory:catagorySlice
  },
})