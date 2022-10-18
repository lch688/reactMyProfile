import { createSlice,  createAsyncThunk ,PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {message} from "antd";



interface ProfessionalState {
    headline: string,
    subtitle: string,
    projects:any[],
    name:string[],
    location:string
    loading:boolean;
    error:any;
}
const initialState:ProfessionalState = {
    headline:'',
    subtitle:'',
    projects:[],
    name:[''],
    location:'',
    loading:true,
    error:null,
};


export const getProfessionalInfo = createAsyncThunk(
    "ProfessionalInfo/getProfessionalInfo",
    async () => {

        const {data}  = await axios.get(
            "/api/projects.json"

        );

       if (data.success){

            return data.data
       }else {
           message.warning('error')
       }


    }
);





export const ProfessionalInfoSlice=createSlice({
    name:"ProfessionalInfo",
    initialState,
    reducers:{
        changeLocation:(state,action:PayloadAction<string>) =>{

            state.location=action.payload

        }
    },
    extraReducers:{
        [getProfessionalInfo.pending.type]:(state)=>{
            state.loading=true
        },
        [getProfessionalInfo.fulfilled.type]:(state,action)=>{
            state.headline=action.payload.headline
            state.subtitle=action.payload.sub
            state.name=action.payload.name
            state.projects=action.payload.projects

            state.location=action.payload.name[0]
            state.loading=false
            state.error=null


        },
        [getProfessionalInfo.rejected.type]:(state,action)=>{
            state.error='error'
            state.loading=false
        },

    }
})