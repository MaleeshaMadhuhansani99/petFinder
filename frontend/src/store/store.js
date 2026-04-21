import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/authSlice'
import petReducer from './features/petsSlice'

export const store = configureStore({
    reducer : {
        auth : authReducer,
        pets : petReducer,
    },
})
