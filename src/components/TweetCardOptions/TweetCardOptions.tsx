import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Stack from "@mui/material/Stack/Stack";
import useTweets from "../../hooks/useTweets/useTweets";
import { useAppSelector } from "../../redux/hooks";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { IconButton, Menu, MenuItem } from "@mui/material";

const options = [
  { action: "Delete", icon: <DeleteIcon /> },
  { action: "Edit", icon: <EditIcon /> },
];
const ITEM_HEIGHT = 48;

interface TweetCardOptionsProps {
  tweetId: string;
}
const TweetCardOptions = ({ tweetId }: TweetCardOptionsProps) => {
  const token = useAppSelector((state) => state.user.token);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { deleteTweet } = useTweets();

  const handleClose = (
    event: React.MouseEvent<HTMLElement>,
    option: string
  ) => {
    event.stopPropagation();
    setAnchorEl(null);

    switch (option) {
      case "delete":
        deleteTweet(token, tweetId);
        break;
      case "edit":
        navigate(`/edit/${tweetId}`);
        break;
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <>
      <IconButton
        aria-label="Tweet Options"
        onMouseDown={(event) => event.stopPropagation()}
        onClick={handleClick}
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
      >
        <MoreHorizIcon />
      </IconButton>

      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.action}
            onClick={(event) => handleClose(event, option.action.toLowerCase())}
          >
            <Stack direction={"row"} gap={1}>
              {option.icon}
              {option.action}
            </Stack>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default TweetCardOptions;
