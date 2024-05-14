import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:false
}

const booleanSlice = createSlice({
    name:"boolean",
    initialState,
    reducers:{
        modalToggle: state=>{
            state.value = !state.value
        }
    }
})


export const {modalToggle} = booleanSlice.actions

export default booleanSlice.reducer