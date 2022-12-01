import {
  Avatar,
  Button,
  CircularProgress,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid/Grid";
import Paper from "@mui/material/Paper/Paper";
import Typography from "@mui/material/Typography/Typography";
import React, { ChangeEvent } from "react";
import useTweets from "../../hooks/useTweets/useTweets";
import { useAppSelector } from "../../redux/hooks";
import { TweetData } from "../../types";
import ImageIcon from "@mui/icons-material/Image";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";

const defaultTweet: Partial<TweetData> = {
  category: "comedy",
  description: "",
  visibilityOpen: true,
};

const FormTweet = () => {
  const maxTweetLength = 280;

  const { id, token } = useAppSelector((state) => state.user);

  const [tweetData, setTweetData] = React.useState<TweetData>(
    defaultTweet as TweetData
  );
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState("");
  const [progress, setProgress] = React.useState(0);

  const { createTweet } = useTweets();

  const navigate = useNavigate();

  const handleDataTweet = (
    event:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    event.preventDefault();
    setTweetData({
      ...tweetData,
      author: id,
      [event.target.name]: event.target.value,
    });
    setProgress(
      (tweetData.description.length / maxTweetLength) * 100 >= 100
        ? 100
        : (tweetData.description.length / maxTweetLength) * 100
    );
  };

  const handleImageFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const files = event.target.files as FileList;

    setTweetData({
      ...tweetData,
      [event.target.name]: files[0],
    });

    const url = URL.createObjectURL(files[0]);
    setImagePreviewUrl(url);
  };
  const handleCancel = () => {
    navigate("/");
  };
  const errorColor = () => {
    if (progress >= 100) {
      return "error";
    } else if (progress >= 80) {
      return "warning";
    } else {
      return "primary";
    }
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1" fontSize={38} fontWeight={900}>
          Tweet something
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ padding: 2 }}>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              createTweet(token, tweetData);
            }}
          >
            <Grid container item xs={12} rowGap={2}>
              <Grid container item xs={12}>
                <Grid item xs={2} sm={1}>
                  <Avatar />
                </Grid>
                <Grid item xs={10} sm={11}>
                  <TextField
                    name="description"
                    fullWidth={true}
                    variant={"standard"}
                    focused
                    multiline={true}
                    placeholder="What's happening?"
                    error={progress >= 100}
                    helperText={
                      progress >= 100
                        ? `Tweet is too long ${tweetData.description.length}/${maxTweetLength}`
                        : ""
                    }
                    onChange={handleDataTweet}
                  />
                </Grid>
              </Grid>

              {imagePreviewUrl && (
                <Grid container item justifyContent={"center"}>
                  <img
                    src={imagePreviewUrl}
                    alt="preview"
                    width={"100%"}
                    height={"300px"}
                    style={{ objectFit: "cover" }}
                  />
                </Grid>
              )}
              <Grid container item xs={12} alignItems={"start"} spacing={1}>
                <Grid item>
                  <IconButton component="label" aria-label="Upload image">
                    <ImageIcon />
                    <input
                      type="file"
                      hidden
                      name="image"
                      onChange={handleImageFile}
                    />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Select
                    name="category"
                    size="small"
                    value={tweetData.category}
                    onChange={handleDataTweet}
                  >
                    <MenuItem disabled value="Category">
                      <Typography fontWeight={900}>Category</Typography>
                    </MenuItem>
                    <MenuItem value={"comedy"}>Comedy</MenuItem>
                    <MenuItem value={"sports"}>Sports</MenuItem>
                    <MenuItem value={"science"}>Science</MenuItem>
                    <MenuItem value={"enter"}>Science</MenuItem>
                    <MenuItem value={"entertainment"}>Entertainment</MenuItem>
                  </Select>
                </Grid>

                <Grid item>
                  <Select
                    name="visibilityOpen"
                    size="small"
                    value={String(tweetData.visibilityOpen)}
                    onChange={handleDataTweet}
                  >
                    <MenuItem disabled>
                      <Typography fontWeight={900}>Who can view</Typography>
                    </MenuItem>
                    <MenuItem value={"true"}>Everyone</MenuItem>
                    <MenuItem value={"false"}>Only followers</MenuItem>
                  </Select>
                </Grid>

                <Grid item>
                  <CircularProgress
                    variant="determinate"
                    value={progress}
                    color={errorColor()}
                  />
                </Grid>
              </Grid>
              <Grid
                item
                container
                xs={12}
                justifyContent={"center"}
                spacing={4}
              >
                <Grid item>
                  <Button
                    onClick={handleCancel}
                    variant="outlined"
                    size="large"
                    sx={{
                      borderRadius: "4px",
                    }}
                  >
                    <Typography fontWeight={900}>Cancel</Typography>
                  </Button>
                </Grid>
                <Grid item>
                  <PrimaryButton>
                    <Typography fontWeight={900}>Tweet</Typography>
                  </PrimaryButton>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default FormTweet;
