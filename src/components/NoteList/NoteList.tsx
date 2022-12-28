import React from "react";
import { useSelector } from "react-redux";

function NoteList() {
  const items = useSelector((state: any) => state.notes.items);

  console.log(items);

  return (
    <div>
      <ul>
        {items.map((item: any) => (
          <li key={item.id}>
            <div>{item.noteValue}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
