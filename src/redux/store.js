import { configureStore } from "@reduxjs/toolkit";
import productslice from "./slices/productslice";
import wishslice from "./slices/wishslice";
import cartslice from "./slices/cartslice";


const productstore=configureStore({
    reducer :{
        productReducer:productslice,
        wishReducer:wishslice,
        cartReducer:cartslice
    }
})

export default productstore