import React from "react";
import "./App.css";
import NoteForm from "./components/NoteForm/NoteForm";
import NoteList from "./components/NoteList/NoteList";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="App">
      <h1>Notes App</h1>
      <Search />
      <NoteForm />
      <NoteList />
    </div>
  );
}

export default App;
