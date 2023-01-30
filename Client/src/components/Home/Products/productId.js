import { createSlice } from '@reduxjs/toolkit'
import { toast} from 'react-toastify';


const initialState = {
  cartItem: [],
}

export const ProductId = createSlice({
  name: 'productid',
  initialState,
  reducers: {
   
    AddItem : (state,action) => {  
           
      const IteamIndex = state.cartItem.findIndex((item)=> item._id === action.payload._id);
 
      // Less Than Zero means that the given produt does not exist in the cart and wise versa.
      console.log(action.payload)
      console.log(IteamIndex)

      if(IteamIndex < 0){
        toast.success( `${action.payload.title} Added to Cart`,{
          position: 'top-center'
        })
         const tempProduct = {...action.payload , cartQuantity:1};
         state.cartItem.push(tempProduct)
     
      }
      else if(IteamIndex >= 0){
        toast.info( `${action.payload.title} Quantity Increased `,{
          position: 'top-center',
        })

        state.cartItem[IteamIndex].cartQuantity +=1
           
      }

    } ,

    IncrementCart : (state,action) => {
      const IteamIndex = state.cartItem.findIndex((item)=> item.id === action.payload.id);
      state.cartItem[IteamIndex].cartQuantity +=1
      // console.log( state.cartItem[IteamIndex].cartQuantity +=1)
    },

    

     DecrementCart : (state,action) => {
      const IteamIndex = state.cartItem.findIndex((item)=> item.id === action.payload.id);

      if(state.cartItem[IteamIndex].cartQuantity > 1){
          state.cartItem[IteamIndex].cartQuantity -= 1
          // console.log(action.payload.cartQuantity)

      }  
     }

     
  },
})

// Action creators are generated for each case reducer function
export const { AddItem ,IncrementCart , DecrementCart } = ProductId.actions

export default ProductId.reducer