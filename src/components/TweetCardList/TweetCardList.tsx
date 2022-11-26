import { Divider, Stack } from "@mui/material";
import React from "react";
import { Tweet } from "../../types";
import TweetCard from "../TweetCard/TweetCard";
interface TweetCardListProps {
  tweets: Tweet[];
}
const TweetCardList = ({ tweets }: TweetCardListProps) => {
  return (
    <Stack
      component={"section"}
      direction={"column"}
      spacing={4}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      {tweets.map((tweet) => (
        <TweetCard key={tweet.id} tweet={tweet} />
      ))}
    </Stack>
  );
};

export default TweetCardList;
