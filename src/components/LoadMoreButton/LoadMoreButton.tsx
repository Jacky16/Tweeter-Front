import LoadingButton from "@mui/lab/LoadingButton";
import AddIcon from "@mui/icons-material/Add";
import { useAppDispatch } from "../../redux/hooks";
import { Pagination } from "../../redux/types";
import { advancePaginationActionCreator } from "../../redux/UiSlice/UiSlice";
import Typography from "@mui/material/Typography/Typography";

interface LoadMoreButtonProps {
  isLoading: boolean;
  pagination: Pagination;
}
const LoadMoreButton = ({
  isLoading,
  pagination: { currentPage, totalPages },
}: LoadMoreButtonProps) => {
  const dispatch = useAppDispatch();

  const isLastPage = currentPage === totalPages;

  const handleClick = () => {
    if (isLastPage) {
      return;
    }
    dispatch(advancePaginationActionCreator());
  };

  return (
    <LoadingButton
      loading={isLoading}
      variant={"outlined"}
      size={"large"}
      endIcon={<AddIcon />}
      loadingPosition="end"
      onClick={handleClick}
    >
      <Typography variant="button" fontWeight={900}>
        Load more
      </Typography>
    </LoadingButton>
  );
};

export default LoadMoreButton;
