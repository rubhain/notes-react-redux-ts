import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: 'notes',
    initialState: { items: [{noteValue: "asd", colour: "yellow"},{noteValue: "dsa", colour: "red"}], },
    reducers: {}
})

export default notesSlice.reducer;