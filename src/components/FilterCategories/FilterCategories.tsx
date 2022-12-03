import { Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl/FormControl";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select/Select";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeFilterCategoryActionCreator } from "../../redux/UiSlice/UiSlice";
import { TweetCategory } from "../../types";

const FilterCategories = () => {
  const dispatch = useAppDispatch();
  const currentCategory = useAppSelector((state) => state.ui.categoryFilter);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(changeFilterCategoryActionCreator(event.target.value));
  };
  const categories = Object.values(TweetCategory).filter(
    (category) => isNaN(+category) && category !== "unknown"
  );
  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <Select
        value={currentCategory}
        onChange={handleChange}
        aria-label="Filter by category"
        size="small"
        variant="outlined"
        color="secondary"
      >
        {categories.map((category) => (
          <MenuItem value={category} key={category}>
            {<Typography textTransform={"capitalize"}>{category}</Typography>}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterCategories;
