import { configureStore } from "@reduxjs/toolkit";
import modalBoolean from './features/boolensSlice'

export const store = configureStore({
    reducer : {
        boolean:modalBoolean
    }
})