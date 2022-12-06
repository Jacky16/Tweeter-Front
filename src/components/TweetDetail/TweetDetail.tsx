import { Avatar, Typography } from "@mui/material";
import Grid from "@mui/material/Grid/Grid";
import Paper from "@mui/material/Paper/Paper";
import Stack from "@mui/system/Stack/Stack";
import { Tweet } from "../../types";
import categoryConverter from "../../utils/categoryConverter/categoryConverter";
import getCategoryColor from "../../utils/getCategoryColor/getCategoryColor";
import TweetDetailStyled from "./TweetDetailStyled";
import getUrlProfileAvatar from "../../utils/getProfileAvatar";
import ReactTimeAgo from "react-time-ago";
import ImageViewer from "react-simple-image-viewer";
import { useState } from "react";

interface TweetDetailProps {
  tweet: Tweet;
}

const TweetDetail = ({
  tweet: { category, alias, username, dateOfCreation, description, image },
}: TweetDetailProps) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = () => {
    setIsViewerOpen(true);
  };
  const closeImageViewer = () => {
    setIsViewerOpen(false);
  };

  const tweetCategory = categoryConverter(category);
  const categoryColor = getCategoryColor(tweetCategory);
  return (
    <TweetDetailStyled>
      <Grid container rowGap={2} direction={"column"}>
        <Grid item xs={12}>
          <Paper
            variant="outlined"
            sx={{
              backgroundColor: categoryColor,
            }}
          >
            <Stack direction={"column"} alignItems={"center"}>
              <Typography
                textTransform={"uppercase"}
                fontSize={32}
                fontWeight={900}
              >
                {category}
              </Typography>
              <Avatar
                sx={{ width: 122, height: 122 }}
                alt={`Avatar ${username}`}
                src={getUrlProfileAvatar(username)}
              />
              <Typography fontWeight={900} fontSize={22}>
                {alias}
              </Typography>
              <Typography fontWeight={900} fontSize={22} color={"#e2e2e2"}>
                {username}
              </Typography>
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} alignItems={"center"}>
          <Paper>
            <Grid item xs={12} padding={2}>
              <Typography variant={"subtitle1"}>
                {dateOfCreation && (
                  <ReactTimeAgo date={new Date(dateOfCreation)} />
                )}
              </Typography>
            </Grid>
            <Grid item xs={12} padding={2}>
              <Stack direction={"column"} spacing={2}>
                <Typography>{description}</Typography>
                <img
                  width={"100%"}
                  height={"400px"}
                  src={image}
                  alt="tweet"
                  style={{ cursor: "pointer" }}
                  onClick={() => openImageViewer()}
                />
              </Stack>
            </Grid>
          </Paper>
        </Grid>
        {isViewerOpen && (
          <ImageViewer
            src={[image]}
            currentIndex={0}
            disableScroll={false}
            closeOnClickOutside={true}
            backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.8)",
            }}
            onClose={closeImageViewer}
          />
        )}
      </Grid>
    </TweetDetailStyled>
  );
};

export default TweetDetail;
