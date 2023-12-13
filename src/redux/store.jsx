import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slices/dataSlice";
import dataSlice2 from "./slices/dataSlice2";
import dataSlice3 from "./slices/dataSlice3";

const store=configureStore({
    reducer:{
      api:dataSlice,
      data:dataSlice2,
      data2:dataSlice3
    }
})

export default store