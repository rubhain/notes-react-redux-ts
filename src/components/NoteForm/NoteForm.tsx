import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addNote } from "../../storage/notes/notesSlice";
import TextField from "@mui/material/TextField";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import { blue, green, pink, purple, yellow } from "@mui/material/colors";

function NoteForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      noteTitle: "",
      noteValue: "",
      colour: "",
    },
    onSubmit: async (values: {
      noteTitle: string;
      noteValue: string;
      colour: string;
    }) => {
      dispatch(addNote(values));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Grid container justifyContent="center">
          <Grid item xs={6}>
            <TextField
              id="noteTitle"
              name="noteTitle"
              label="Note Title"
              multiline
              fullWidth
              maxRows={4}
              onChange={formik.handleChange}
              variant="filled"
            />

            <TextField
              id="standard-multiline-static"
              label="Note"
              multiline
              fullWidth
              rows={8}
              variant="standard"
              name="noteValue"
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid container direction="row" justifyContent="center">
            <FormControl>
              <FormLabel id="colour" />
              <Grid item alignItems="flex-start" justifyItems="flex-start">
                <RadioGroup
                  row
                  aria-labelledby="colour-selectors"
                  name="row-radio-buttons-group"
                >
                  {" "}
                  <FormControlLabel
                    onChange={formik.handleChange}
                    id="colour"
                    name="colour"
                    value="pink"
                    control={
                      <Radio
                        sx={{
                          color: pink[500],
                          "&.Mui-checked": {
                            color: pink[300],
                          },
                        }}
                      />
                    }
                    label=""
                  />
                  <FormControlLabel
                    onChange={formik.handleChange}
                    id="colour"
                    name="colour"
                    value="purple"
                    control={
                      <Radio
                        sx={{
                          color: purple[500],
                          "&.Mui-checked": {
                            color: purple[300],
                          },
                        }}
                      />
                    }
                    label=""
                  />
                  <FormControlLabel
                    onChange={formik.handleChange}
                    id="colour"
                    name="colour"
                    value="green"
                    control={
                      <Radio
                        sx={{
                          color: green[500],
                          "&.Mui-checked": {
                            color: green[300],
                          },
                        }}
                      />
                    }
                    label=""
                  />
                  <FormControlLabel
                    onChange={formik.handleChange}
                    id="colour"
                    name="colour"
                    value="yellow"
                    control={
                      <Radio
                        sx={{
                          color: yellow[500],
                          "&.Mui-checked": {
                            color: yellow[300],
                          },
                        }}
                      />
                    }
                    label=""
                  />
                  <FormControlLabel
                    onChange={formik.handleChange}
                    id="colour"
                    name="colour"
                    value="blue"
                    control={
                      <Radio
                        sx={{
                          color: blue[500],
                          "&.Mui-checked": {
                            color: blue[300],
                          },
                        }}
                      />
                    }
                    label=""
                  />
                </RadioGroup>
              </Grid>
            </FormControl>
            <Grid item justifyContent="flex-end">
              <Button type="submit">Add</Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default NoteForm;
