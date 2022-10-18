import { createSlice,  createAsyncThunk ,PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {message} from "antd";



interface ContactState {
    headline: string,
    subtitle: string,
    address:string,
    phone:string,
    email:string
    loading:boolean;
    error:any;
}
const initialState:ContactState = {
    headline:'',
    subtitle:'',
    address:'',
    phone:'',
    email:'',
    loading:true,
    error:null,
};


export const getContactInfo = createAsyncThunk(
    "ContactInfo/getContactInfo",
    async () => {

        const {data}  = await axios.get(
            "/api/contact.json"

        );

       if (data.success){

            return data.data
       }else {
           message.warning('error')
       }


    }
);





export const ContactInfoSlice=createSlice({
    name:"ContactInfo",
    initialState,
    reducers:{

    },
    extraReducers:{
        [getContactInfo.pending.type]:(state)=>{
            state.loading=true
        },
        [getContactInfo.fulfilled.type]:(state,action)=>{
            state.headline=action.payload.headline
            state.subtitle=action.payload.subtitle
            state.address=action.payload.address
            state.phone=action.payload.phone
            state.email=action.payload.email
            state.loading=false
            state.error=null


        },
        [getContactInfo.rejected.type]:(state,action)=>{
            state.error='error'
            state.loading=false
        },

    }
})