import { Backdrop, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <div role={"alert"}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="primary" />
      </Backdrop>
    </div>
  );
};

export default Loader;
