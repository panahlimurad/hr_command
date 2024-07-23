import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:false,
    confirm:false,
}

const booleanSlice = createSlice({
    name:"boolean",
    initialState,
    reducers:{
        modalToggle: state=>{
            state.value = !state.value
        },
        confirmToggle: state=>{
            state.confirm = !state.confirm
        }
    }
})


export const {modalToggle, confirmToggle} = booleanSlice.actions

export default booleanSlice.reducer