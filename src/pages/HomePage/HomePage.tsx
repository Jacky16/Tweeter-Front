import Fab from "@mui/material/Fab/Fab";
import Grid from "@mui/material/Grid/Grid";
import { useEffect } from "react";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";
import TweetCardList from "../../components/TweetCardList/TweetCardList";
import useTweets from "../../hooks/useTweets/useTweets";
import { useAppSelector } from "../../redux/hooks";
import ChangeHistoryRoundedIcon from "@mui/icons-material/ChangeHistoryRounded";
import { useNavigate } from "react-router-dom";
import FilterSection from "../../components/FilterSection/FilterSection";
import Divider from "@mui/material/Divider/Divider";

const HomePage = () => {
  const {
    pagination: { currentPage, totalPages },
    isLoading,
    categoryFilter,
  } = useAppSelector((state) => state.ui);
  const token = useAppSelector((state) => state.user.token);
  const tweets = useAppSelector((state) => state.tweets.tweets);
  const navigate = useNavigate();

  const { getTweets, loadTweets, loadTweetsByCategory, getTweetsByCategory } =
    useTweets();

  const isLastPage = currentPage === totalPages;

  const handleCreateTweet = () => {
    navigate("/create");
  };

  useEffect(() => {
    if (currentPage === 1) {
      if (categoryFilter !== "all") {
        loadTweetsByCategory(token, categoryFilter, 5);
        return;
      }
      loadTweets(token, 5);
      return;
    }
    if (categoryFilter !== "all") {
      getTweetsByCategory(token, categoryFilter, currentPage, 5);
      return;
    }
    getTweets(token, currentPage, 5);
  }, [
    categoryFilter,
    currentPage,
    getTweets,
    getTweetsByCategory,
    loadTweets,
    loadTweetsByCategory,
    token,
  ]);

  return (
    <>
      <Grid
        justifyContent="center"
        alignItems="center"
        paddingY={4}
        container
        spacing={3}
      >
        <Grid item xs={12}>
          <FilterSection />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <TweetCardList tweets={tweets} isLoading={isLoading} />
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
          right: 32,
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
