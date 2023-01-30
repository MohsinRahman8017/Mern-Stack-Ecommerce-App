import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './components/Home/ProductLisiting/counterSlice'
import  ProductId  from "./components/Home/Products/productId"
 
export const store = configureStore({
  reducer: {
      counter : counterSlice,
      product : ProductId,
  },
})