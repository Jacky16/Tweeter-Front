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
import React, { ChangeEvent, useEffect, useState } from "react";
import useTweets from "../../hooks/useTweets/useTweets";
import { useAppSelector } from "../../redux/hooks";
import { TweetData } from "../../types";
import ImageIcon from "@mui/icons-material/Image";
import { useNavigate, useParams } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import getUrlProfileAvatar from "../../utils/getProfileAvatar";

const maxTweetLength = 280;

interface FormTweetProps {
  isEditMode?: boolean;
}
const FormTweet = ({ isEditMode = false }: FormTweetProps) => {
  const { id, token } = useAppSelector((state) => state.user);
  const { tweet } = useAppSelector((state) => state.tweets);
  const isLoading = useAppSelector((state) => state.ui.isLoading);

  const { createTweet, getOneTweet, updateTweet } = useTweets();
  const { idTweet } = useParams();
  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [tweetData, setTweetData] = useState<TweetData>({
    category: "comedy",
    description: "",
    visibilityOpen: true,
  } as TweetData);

  useEffect(() => {
    if (isEditMode) {
      getOneTweet(token, idTweet!);
    }
  }, [isEditMode, getOneTweet, idTweet, token]);

  useEffect(() => {
    if (isEditMode) {
      const defaultTweetData: Partial<TweetData> = {
        category: tweet?.category,
        description: tweet?.description,
        id: tweet.id,
        author: id,
        image: {} as File,
      };

      setTweetData(defaultTweetData as TweetData);
      setImagePreviewUrl(tweet.image);
    }
  }, [id, isEditMode, tweet]);

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isEditMode) {
      createTweet(token, tweetData);
      return;
    }
    updateTweet(token, { ...tweetData });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper sx={{ padding: 2 }}>
          <form onSubmit={handleSubmit}>
            <Grid container item xs={12} rowGap={2}>
              <Grid container item xs={12}>
                <Grid item xs={2} sm={1}>
                  <Avatar src={getUrlProfileAvatar(tweet.username)} />
                </Grid>
                <Grid item xs={10} sm={11}>
                  <TextField
                    name="description"
                    fullWidth={true}
                    variant={"standard"}
                    focused
                    multiline={true}
                    placeholder="What's happening?"
                    value={tweetData.description}
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
                    <MenuItem value={"political"}>Political</MenuItem>
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
                  <LoadingButton
                    loading={isLoading}
                    variant="contained"
                    type="submit"
                    sx={{ borderRadius: "4px" }}
                    size={"large"}
                  >
                    <Typography fontWeight={900}>
                      {isEditMode ? "Edit Tweet" : "Tweet"}
                    </Typography>
                  </LoadingButton>
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
