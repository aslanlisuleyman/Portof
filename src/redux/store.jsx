import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slices/dataSlice";

const store=configureStore({
    reducer:{
      api:dataSlice
    }
})

export default store