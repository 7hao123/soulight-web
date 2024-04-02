import {createSlice} from '@reduxjs/toolkit'

export interface AccountState{
   
    title:string;
    accountname:string;
    accountbirth:string;
    accountgender:string;
    accountemail:string;
    accountcountry:string;
    accountphoneNumber:string;
}

const initialState:AccountState = {
    accountname:localStorage.getItem("accountName")?localStorage.getItem("accountName"):'',
    accountbirth:localStorage.getItem("accountbirth")?localStorage.getItem("accountbirth"):'',
    accountgender: localStorage.getItem("accountGender")?localStorage.getItem("accountGender")     :'',
    accountemail:localStorage.getItem("accountEmail")?localStorage.getItem("accountEmail"):'',
    accountphoneNumber:localStorage.getItem("accountPhone")?localStorage.getItem("accountPhone"):'',
    accountcountry:localStorage.getItem("accountCountry")?localStorage.getItem("accountCountry"):'',
    title:'Account'
}


export const AccountSlice = createSlice({
    name:'Account',
    initialState,
    reducers:{
        setAccountName:(state,{payload})=>{
            console.log(state.accountcountry);
            
            state.accountname = payload;
        
            
        },
        setAccountBirth:(state,{payload})=>{
            state.accountbirth = payload
        },
        setAccountGender:(state,{payload})=>{
            state.accountgender = payload;
        },
        setAccountEmail:(state,{payload})=>{
            state.accountemail = payload;
        },
        setAccountPhoneNumber:(state,{payload})=>{
            state.accountphoneNumber = payload;
        },
        setAccountCountry:(state,{payload})=>{
            state.accountcountry = payload;
        },
        
    }
})


export const {setAccountEmail,setAccountBirth,setAccountGender,setAccountName,setAccountPhoneNumber,setAccountCountry} = AccountSlice.actions;

export default AccountSlice.reducer