import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const wishlistslice=createSlice({
    name:'wishslice',
    initialState:{
        items:[]
    },

    reducers:{
        addToWishList(state , action){
            const existing=state.items.find(item=>item.id == action.payload.id)
            if(existing){
                toast.warning("Item Already AddedTo Wishlist")
            }
            else{
                state.items.push(action.payload)
                toast.success('Item Added To Wishlist')
            }

            
        },
        removeFromWishList(state , action){
            state.items=state.items.filter(items=>items.id!=action.payload)
        }
    }
})

export default wishlistslice.reducer
export const {addToWishList , removeFromWishList} =wishlistslice.actions