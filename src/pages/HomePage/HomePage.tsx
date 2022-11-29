import Grid from "@mui/material/Grid/Grid";
import { useEffect } from "react";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";
import TweetCardList from "../../components/TweetCardList/TweetCardList";
import useTweets from "../../hooks/useTweets/useTweets";
import { useAppSelector } from "../../redux/hooks";

const HomePage = () => {
  const {
    pagination: { currentPage, totalPages },
    isLoading,
  } = useAppSelector((state) => state.ui);

  const token = localStorage.getItem("token") as string;

  const tweets = useAppSelector((state) => state.tweets.tweets);

  const { getTweets, loadTweets } = useTweets();

  const isLastPage = currentPage === totalPages;

  useEffect(() => {
    if (currentPage === 1) {
      loadTweets(token);
    } else {
      getTweets(token, currentPage);
    }
  }, [currentPage, getTweets, loadTweets, token]);

  return (
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
  );
};

export default HomePage;
