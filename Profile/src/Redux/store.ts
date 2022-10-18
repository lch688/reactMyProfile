import {combineReducers,configureStore} from "@reduxjs/toolkit"
import {HeaderInfoSlice} from '../Layout/components/RTK/slice'
import {HomepageInfoSlice} from '../Pages/Home/RTK/slice'
import {BackgroundInfoSlice } from  '../Pages/Background/RTK/slice'
import {ProfessionalInfoSlice} from  '../Pages/Project/RTK/slice'
import {ContactInfoSlice} from  '../Pages/contact/RTK/slice'


const rootReducer = combineReducers({
    Header:HeaderInfoSlice.reducer,
    Home:HomepageInfoSlice.reducer,
    Background:BackgroundInfoSlice.reducer,
    Project:ProfessionalInfoSlice.reducer,
    Contact:ContactInfoSlice.reducer,

})


const store = configureStore({
    reducer: rootReducer,

    devTools: false,
});


export type Rootstate = ReturnType<typeof  store.getState>
export type AppDispatch = typeof store.dispatch;

export default store