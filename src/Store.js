import { configureStore } from '@reduxjs/toolkit'
import CounterSlices from "./slices/CounterSlices"
import  BreadCrump  from './slices/BreadCrump'
export default configureStore({
  reducer: {
    nameCounter : CounterSlices,
    BreadCrump:BreadCrump,
  },
})