import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: 'notes',
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    initialState: { items:<any> [] , activeFilter:<string> ''},
    reducers: {
        addNote: (state, action) =>{
            state.items.push(action.payload)
        },
        changeActiveFilter: (state, action) =>{
            state.activeFilter = action.payload;
        }
    },
})

export const { addNote, changeActiveFilter } = notesSlice.actions;
export default notesSlice.reducer;