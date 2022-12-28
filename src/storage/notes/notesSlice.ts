import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: 'notes',
    initialState: { items: [{ noteValue: "asdasd", colour: "purple" }] },
    reducers: {
        addNote: (state, action) =>{
            state.items.push(action.payload)
        },
    },
})

export const { addNote } = notesSlice.actions;
export default notesSlice.reducer;