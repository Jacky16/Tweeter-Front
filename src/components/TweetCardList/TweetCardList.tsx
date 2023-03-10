import { Stack, Divider } from "@mui/material";
import { Tweet } from "../../types";
import TweetCard from "../TweetCard/TweetCard";
import TweetCardSkeleton from "../TweetCardSkeleton/TweetCardSkeleton";
interface TweetCardListProps {
  tweets: Tweet[];
  showCardsSkeleton: boolean;
}

const TweetCardList = ({
  tweets,
  showCardsSkeleton: isLoading,
}: TweetCardListProps) => {
  const tweetsSkeleton = Array.from(["", "", ""]);
  return (
    <Stack
      component={"section"}
      direction={"column"}
      spacing={4}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      {isLoading
        ? tweetsSkeleton.map((skeletonTweet, index) => (
            <TweetCardSkeleton key={index} />
          ))
        : tweets.map((tweet) => <TweetCard tweet={tweet} key={tweet.id} />)}
    </Stack>
  );
};

export default TweetCardList;
