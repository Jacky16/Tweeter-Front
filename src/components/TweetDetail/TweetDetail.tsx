import { Avatar, Typography } from "@mui/material";
import Grid from "@mui/material/Grid/Grid";
import Paper from "@mui/material/Paper/Paper";
import Stack from "@mui/system/Stack/Stack";
import { Tweet } from "../../types";
import categoryConverter from "../../utils/categoryConverter/categoryConverter";
import getCategoryColor from "../../utils/getCategoryColor/getCategoryColor";
import en from "javascript-time-ago/locale/en";
import TimeAgo from "javascript-time-ago";
import TweetDetailStyled from "./TweetDetailStyled";

interface TweetDetailProps {
  tweet: Tweet;
}

const TweetDetail = ({
  tweet: { category, alias, username, dateOfCreation, description, image },
}: TweetDetailProps) => {
  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en-US");
  const date = timeAgo.format(new Date(dateOfCreation), "twitter-now");

  const tweetCategory = categoryConverter(category);
  const categoryColor = getCategoryColor(tweetCategory);
  return (
    <TweetDetailStyled>
      <Grid container xs={12} rowGap={2} padding={2} direction={"column"}>
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
              <Avatar sx={{ width: 122, height: 122 }} />
              <Typography fontWeight={900} fontSize={22}>
                {alias}
              </Typography>
              <Typography fontWeight={900} fontSize={22} color={"#e2e2e2"}>
                {username}
              </Typography>
            </Stack>
          </Paper>
        </Grid>

        <Grid
          item
          xs={12}
          alignItems={"center"}
          direction={"column"}
          spacing={2}
        >
          <Paper>
            <Grid item xs={12} padding={2}>
              <Typography variant={"subtitle1"}>{date}</Typography>
            </Grid>
            <Grid item xs={12} padding={2}>
              <Stack direction={"column"} spacing={2}>
                <Typography>{description}</Typography>
                <img width={"100%"} height={"400px"} src={image} alt="tweet" />
              </Stack>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </TweetDetailStyled>
  );
};

export default TweetDetail;
