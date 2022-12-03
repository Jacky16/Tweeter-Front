import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid/Grid";
import { useAppSelector } from "../../redux/hooks";
import FilterCategories from "../FilterCategories/FilterCategories";

const FilterSection = () => {
  const currentCategory = useAppSelector((state) => state.ui.categoryFilter);
  return (
    <Grid container alignItems={"center"} justifyContent={"space-between"}>
      <Typography textTransform={"capitalize"} fontWeight={600} fontSize={30}>
        {currentCategory} tweets
      </Typography>
      <FilterCategories />
    </Grid>
  );
};

export default FilterSection;
