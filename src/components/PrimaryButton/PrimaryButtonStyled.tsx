import { Button, styled } from "@mui/material";
import { MainTheme } from "../../MainTheme/MainTheme";

const ButtonPrimaryStyled = styled(Button)`
  border-radius: 4px;
  font-weight: bold;
  color: ${MainTheme.palette.text.primary};
  background-color: ${MainTheme.palette.primary.main};
  width: 100%;
`;
export default ButtonPrimaryStyled;
