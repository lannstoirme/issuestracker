import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:"user",
    initialState:[{}],
    reducers: {
        getUser:(state)=>{
            state.push({name: "Lori Orford"})
            state.push({name: "Joe Bloggs"})
        }
    }
})

export default slice.reducer;

export const {getUser} = slice.actions;