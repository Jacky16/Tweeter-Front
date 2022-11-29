import Button from "@mui/material/Button/Button";
import Grid from "@mui/material/Grid/Grid";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import TweetDetail from "../../components/TweetDetail/TweetDetail";
import useTweets from "../../hooks/useTweets/useTweets";
import { useAppSelector } from "../../redux/hooks";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const TweetDetailPage = () => {
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  const tweet = useAppSelector((state) => state.tweets.tweet);
  const token = useAppSelector((state) => state.user.token);

  const navigate = useNavigate();

  const { idTweet } = useParams();
  const { getOneTweet } = useTweets();
  useEffect(() => {
    getOneTweet(token, idTweet!);
  }, [getOneTweet, idTweet, token]);

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Grid container spacing={2}>
          <Grid item>
            <Button startIcon={<KeyboardBackspaceIcon />} onClick={handleClick}>
              Back
            </Button>
          </Grid>
          <Grid item xs={12}>
            <TweetDetail tweet={tweet} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default TweetDetailPage;
