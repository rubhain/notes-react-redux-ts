import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: 'notes',
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    initialState: { items:<any> [] },
    reducers: {
        addNote: (state, action) =>{
            state.items.push(action.payload)
        },
    },
})

export const { addNote } = notesSlice.actions;
export default notesSlice.reducer;