import {createSlice} from '@reduxjs/toolkit'

export interface LoginState{
    value:boolean;
    title:string;
}

const initialState:LoginState = {
    value:false,
    title:'login'
}


export const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        loginIn:(state)=>{
            state.value = true
        },
        loginOut:(state)=>{
            state.value = false
        }
    }
})


export const {loginIn,loginOut} = loginSlice.actions;

export default loginSlice.reducer