import { createSlice } from "@reduxjs/toolkit";

const petSlice = createSlice ({
    name:'pets',

    initialState : {
        list:[],
        filters: {
            species:'',
            location:'',
            age:'',
        }
    },

    reducers : {
        setPets : (state, action) => {
            state.list = action.payload
        },
        setFilter : (state, action)=>{
            state.filters = {...state.filters, ...action.payload}
        },
        clearFilters : (state)=> {
            state.filters = {
                species:'',
                location:'',
                age:'',
            }
        }
    }
})

export const {setPets, setFilter, clearFilters} = petSlice.actions
export default petSlice.reducer