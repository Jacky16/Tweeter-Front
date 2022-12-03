import Fab from "@mui/material/Fab/Fab";
import Grid from "@mui/material/Grid/Grid";
import { useEffect } from "react";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";
import TweetCardList from "../../components/TweetCardList/TweetCardList";
import useTweets from "../../hooks/useTweets/useTweets";
import { useAppSelector } from "../../redux/hooks";
import ChangeHistoryRoundedIcon from "@mui/icons-material/ChangeHistoryRounded";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const {
    pagination: { currentPage, totalPages },
    isLoading,
  } = useAppSelector((state) => state.ui);
  const token = useAppSelector((state) => state.user.token);
  const tweets = useAppSelector((state) => state.tweets.tweets);

  const navigate = useNavigate();

  const { getTweets, loadTweets } = useTweets();

  const isLastPage = currentPage === totalPages;

  const handleCreateTweet = () => {
    navigate("/create");
  };

  useEffect(() => {
    if (currentPage === 1) {
      loadTweets(token);
      return;
    }
    getTweets(token, currentPage);
  }, [currentPage, getTweets, loadTweets, token]);

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        paddingY={4}
      >
        <Grid item xs={12}>
          <TweetCardList tweets={tweets} />
        </Grid>
        {!isLastPage && (
          <Grid item>
            <LoadMoreButton
              isLoading={isLoading}
              pagination={{ currentPage, totalPages }}
            />
          </Grid>
        )}
      </Grid>
      <Fab
        color="primary"
        aria-label="Add tweet"
        size="large"
        onClick={handleCreateTweet}
        sx={{
          display: "flex",
          alignItems: "center",
          position: "fixed",
          bottom: 48,
          right: 48,
          padding: 1,
        }}
      >
        <ChangeHistoryRoundedIcon
          fontSize="large"
          sx={{
            position: "relative",
            top: "50%",
            transform: "translateY(-65%)",
          }}
        />
      </Fab>
    </>
  );
};

export default HomePage;
