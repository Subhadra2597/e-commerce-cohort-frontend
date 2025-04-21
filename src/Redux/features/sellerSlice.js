import { createSlice } from "@reduxjs/toolkit";


// Set initial value
const initialState = {
    isSellerAuth: false,
    sellerData: {}
}

// Create seller slice
export const sellerSlice =  createSlice({
    name: 'seller',
    initialState,
    reducers: {
        saveSeller: (state, action) => {
            (state.isSellerAuth = true),
            (state.sellerData = action.payload)
        },
        clearSeller: (state) => {
            (state.isSellerAuth = false),
            (state.sellerData = {})
        }
    }
})

export const {saveSeller, clearSeller} = sellerSlice.actions
export default sellerSlice.reducer