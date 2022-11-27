import LoadingButton from "@mui/lab/LoadingButton";
import AddIcon from "@mui/icons-material/Add";

interface LoadMoreButtonProps {
  isLoading: boolean;
}
const LoadMoreButton = ({ isLoading }: LoadMoreButtonProps) => {
  return (
    <LoadingButton
      loading={isLoading}
      variant={"outlined"}
      size={"large"}
      endIcon={<AddIcon />}
      loadingPosition="end"
    >
      Load more
    </LoadingButton>
  );
};

export default LoadMoreButton;
