import { Link as RouterLink } from "react-router-dom";
import Stack from "@mui/material/Stack/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const NotFoundPage = () => {
  const fontWeight = 900;
  return (
    <Stack justifyContent={"center"} direction={"column"} alignItems={"center"}>
      <Typography fontSize={100} fontWeight={fontWeight}>
        404
      </Typography>
      <Typography fontSize={65} fontWeight={fontWeight} textAlign={"center"}>
        THIS PAGE DOESN’T EXISTS
      </Typography>
      <Typography fontWeight={fontWeight} fontSize={40} textAlign={"center"}>
        Go to{" "}
        <Link component={RouterLink} to={"/"}>
          home
        </Link>
      </Typography>
    </Stack>
  );
};

export default NotFoundPage;
