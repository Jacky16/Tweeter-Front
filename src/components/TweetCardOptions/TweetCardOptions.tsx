import IconButton from "@mui/material/IconButton/IconButton";
import React from "react";
import Menu from "@mui/material/Menu/Menu";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Stack from "@mui/material/Stack/Stack";
import useTweets from "../../hooks/useTweets/useTweets";
import { useAppSelector } from "../../redux/hooks";

const options = ["Delete"];
const ITEM_HEIGHT = 48;

interface TweetCardOptionsProps {
  tweetId: string;
}
const TweetCardOptions = ({ tweetId }: TweetCardOptionsProps) => {
  const token = useAppSelector((state) => state.user.token);

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
        deleteTweet(tweetId, token);
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
            key={option}
            onClick={(event) => handleClose(event, option.toLowerCase())}
          >
            <Stack direction={"row"} gap={1}>
              <DeleteIcon />
              {option}
            </Stack>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default TweetCardOptions;
