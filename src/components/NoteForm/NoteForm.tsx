import React from "react";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addNote } from "../../storage/notes/notesSlice";

function NoteForm() {
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={{
          noteValue: "",
          colour: "",
        }}
        onSubmit={async (values: { noteValue: string; colour: string }) => {
          dispatch(addNote(values));
        }}
      >
        <Form>
          <Field
            id="noteValue"
            name="noteValue"
            placeholder="Enter your note here"
          />
          <label>
            <Field type="radio" name="colour" value="pink" />
            pink
          </label>
          <label>
            <Field type="radio" name="colour" value="purple" />
            purple
          </label>
          <label>
            <Field type="radio" name="colour" value="yellow" />
            yellow
          </label>
          <label>
            <Field type="radio" name="colour" value="blue" />
            blue
          </label>
          <label>
            <Field type="radio" name="colour" value="green" />
            green
          </label>
          <button type="submit">Add</button>
        </Form>
      </Formik>
    </div>
  );
}

export default NoteForm;
