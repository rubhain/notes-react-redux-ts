import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { changeActiveFilter } from "../../storage/notes/notesSlice";

function Search() {
  const dispatch = useDispatch();

  const handleOnChange = (e: any) => {
    dispatch(changeActiveFilter(e.target.value));
  };

  return (
    <div>
      <form>
        <TextField
          id="activeFilter"
          name="activeFilter"
          label="Search Title"
          variant="outlined"
          onChange={handleOnChange}
        />
      </form>
    </div>
  );
}

export default Search;
