import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";

function NoteList() {
  const items = useSelector((state: any) => state.notes.items);
  const activeFilter = useSelector((state: any) => state.notes.activeFilter);

  console.log(activeFilter);

  return (
    <div>
      <ul>
        {items
          .filter((note: any) => {
            return (
              note.noteTitle.toLowerCase().indexOf(activeFilter.toLowerCase()) >
              -1
            );
          })
          .map((item: any) => (
            <li key={nanoid(1)}>
              <div>
                {item.noteTitle} - {item.colour}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default NoteList;
