import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: 'notes',
    initialState: { item: [], },
    reducers: {}
})

export default notesSlice.reducer;