import { createSlice,  createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {message} from "antd";



interface HomepageState {
    typeWriter:string[];
    topIntro:string;
    bio:any;
    iconInfo:any[]
    resume: any
    loading:boolean;
    error:any;
}

const initialState: HomepageState = {
    typeWriter:[],
    topIntro:'',
    bio:{},
    iconInfo:[],
    resume:{},
    loading:true,
    error:null,
};


export const getHomepageInfo = createAsyncThunk(
    "HomepageInfo/getHomepageInfo",
    async () => {

        const {data}  = await axios.get(
            "/api/homeInfo.json"

        );

       if (data.success){

            return data.data
       }else {
           message.warning('error')
       }


    }
);





export const HomepageInfoSlice=createSlice({
    name:"HomepageInfo",
    initialState,
    reducers:{

    },
    extraReducers:{
        [getHomepageInfo.pending.type]:(state)=>{
            state.loading=true
        },
        [getHomepageInfo.fulfilled.type]:(state,action)=>{
            state.typeWriter=action.payload.typeWriter
            state.topIntro=action.payload.topIntro
            state.bio=action.payload.bio
            state.iconInfo=action.payload.iconInfo
            state.resume=action.payload.resume
            state.loading=false
            state.error=null


        },
        [getHomepageInfo.rejected.type]:(state,action)=>{
            state.error='error'
            state.loading=false
        },

    }
})