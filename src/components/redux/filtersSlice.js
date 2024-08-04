import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: '',
    reducers: {
        filteringName(state, action) {
           return state = action.payload
            },
    }
    
})

export  const {filteringName} = filtersSlice.actions;
export  const filtersReducer = filtersSlice.reducer;