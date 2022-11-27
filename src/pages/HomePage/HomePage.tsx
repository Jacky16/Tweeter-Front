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

  const token = useAppSelector((state) => state.user.token);
  const tweets = useAppSelector((state) => state.tweets.tweets);

  const { getTweets } = useTweets();
  const isLastPage = currentPage === totalPages;

  useEffect(() => {
    getTweets(token, currentPage);
  }, [token, getTweets, currentPage]);

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
