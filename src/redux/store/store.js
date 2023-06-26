import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/counter/counterslice'


export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
})