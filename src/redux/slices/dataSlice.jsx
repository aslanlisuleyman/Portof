import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from 'axios'
export const  getData=createAsyncThunk('getData',async()=>{
    const response=await axios.get('http://localhost:3000/books')
    return response.data
})

const dataSlice=createSlice({
    name:'api',
    initialState:{
        data:[],
        loading:false,
        error:''

    },
    extraReducers:(builder)=>{
            builder.addCase(getData.pending,(state,action)=>{
                state.loading=true,
                state.error=''
            })
            builder.addCase(getData.fulfilled,(state,action)=>{
                state.loading=false,
                state.error='',
                state.data=action.payload
                console.log(state.data)
            })
            builder.addCase(getData.rejected,(state,action)=>{
                state.error=action.payload.message,
                state.loading=false
            })
    }
})
export default dataSlice.reducer