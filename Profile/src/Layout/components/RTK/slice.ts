import { createSlice,  createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {message} from "antd";



interface HeaderState {
    name:string,
    nav:string[],


}

const initialState: HeaderState = {
    name:'',
    nav:['','',''],

};


export const getHeaderInfo = createAsyncThunk(
    "HeaderInfo/getHeaderInfo",
    async () => {

        const {data}  = await axios.get(
            "/api/header.json"

        );

       if (data.success ){
            return data.data
       }else {
           message.warning('error')
       }


    }
);





export const HeaderInfoSlice=createSlice({
    name:"HeaderInfo",
    initialState,
    reducers:{

    },
    extraReducers:{

        [getHeaderInfo.fulfilled.type]:(state,action)=>{

            state.name=action.payload.name
            state.nav=action.payload.nav



        },


    }
})