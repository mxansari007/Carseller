import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchValue:'',
    relevance:'',
    brands:'',
}

export const searchSlice = createSlice({
    name:'search',
    initialState,
    reducers:{
        setSearch:(state,action)=>{
            state.searchValue = action.payload;
            console.log(state.searchValue);
        }
    }
})

export const {setSearch} = searchSlice.actions;

export default searchSlice.reducer;