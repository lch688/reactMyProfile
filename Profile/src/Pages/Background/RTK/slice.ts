import { createSlice,  createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {message} from "antd";



interface BackgroundState {
    headline: string,
    subtitle: string,
    first: any,
    second: any,
    third: any,
    loading:boolean;
    error:any;
}
const initialState:BackgroundState = {
    headline:'',
    subtitle:'',
    first:{},
    second:{},
    third:{},
    loading:true,
    error:null,
};


export const getBackgroundInfo = createAsyncThunk(
    "BackgroundInfo/getBackgroundInfo",
    async () => {

        const {data}  = await axios.get(
            "/api/background.json"

        );

       if (data.success){

            return data.data
       }else {
           message.warning('error')
       }


    }
);





export const BackgroundInfoSlice=createSlice({
    name:"BackgroundInfo",
    initialState,
    reducers:{

    },
    extraReducers:{
        [getBackgroundInfo.pending.type]:(state)=>{
            state.loading=true
        },
        [getBackgroundInfo.fulfilled.type]:(state,action)=>{
            state.headline=action.payload.headline
            state.subtitle=action.payload.sub
            state.first=action.payload.first
            state.second=action.payload.second
            state.third=action.payload.third
            state.loading=false
            state.error=null


        },
        [getBackgroundInfo.rejected.type]:(state,action)=>{
            state.error='error'
            state.loading=false
        },

    }
})