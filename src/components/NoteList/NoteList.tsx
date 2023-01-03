import { Grid } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";

function NoteList() {
  const items = useSelector((state: any) => state.notes.items);
  const activeFilter = useSelector((state: any) => state.notes.activeFilter);

  return (
    <div>
      <Grid container justifyContent="center">
        <ul>
          {items
            .filter((note: any) => {
              return (
                note.noteTitle
                  .toLowerCase()
                  .indexOf(activeFilter.toLowerCase()) > -1
              );
            })
            .map((item: any) => (
              <li key={nanoid(1)}>
                {item.noteTitle} - {item.noteValue}
              </li>
            ))}
        </ul>
      </Grid>
    </div>
  );
}

export default NoteList;
