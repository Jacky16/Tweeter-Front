import { Logout } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar/Avatar";
import Button from "@mui/material/Button/Button";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import Menu from "@mui/material/Menu/Menu";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import Tooltip from "@mui/material/Tooltip/Tooltip";
import Typography from "@mui/material/Typography/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { userLogoutActionCreator } from "../../redux/userSlice/userSlice";
import useToken from "../../hooks/useToken/useToken";
import getUrlProfileAvatar from "../../utils/getProfileAvatar";
import Stack from "@mui/material/Stack/Stack";

const AccountMenu = () => {
  const { alias, username } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const { removeToken } = useToken();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutUser = () => {
    removeToken();
    dispatch(userLogoutActionCreator());
  };

  const open = Boolean(anchorEl);
  return (
    <>
      <Tooltip title="Account settings">
        <Button
          onClick={handleClick}
          endIcon={<ArrowDropDownIcon />}
          sx={{
            paddingY: "8px",
            paddingX: "8px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            height: "100%",
          }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Stack direction={"row"} alignItems={"center"}>
            <Avatar src={getUrlProfileAvatar(username)} />
            <Typography fontSize={14} height={"100%"}>
              {alias}
            </Typography>
          </Stack>
        </Button>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "hidden",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={logoutUser}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountMenu;
