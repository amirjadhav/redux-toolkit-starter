import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const counterslice = createSlice({
    name: 'counterslice',
    initialState,

    reducers: {
        increment: (state) => {
            state.value += 1
        },

        decrement: (state) => {
            state.value -= state.value < 1 ? 0 : 1
        }

    }
})


// Action creators are generated for each case reducer function
export const { increment, decrement } = counterslice.actions

export default counterslice.reducer