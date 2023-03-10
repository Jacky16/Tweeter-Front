import { Tweet } from "../../types";
import Category from "../Category/Category";
import TweetCardStyled from "./TweetCardStyled";
import categoryConverter from "../../utils/categoryConverter/categoryConverter";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import TweetCardOptions from "../TweetCardOptions/TweetCardOptions";
import getUrlProfileAvatar from "../../utils/getProfileAvatar";
import ReactTimeAgo from "react-time-ago";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Avatar,
  Typography,
  Divider,
} from "@mui/material";
interface TweetCardProps {
  tweet: Tweet;
}
const TweetCard = ({
  tweet: { alias, category, dateOfCreation, username, description, image, id },
}: TweetCardProps) => {
  const isAuthorOfTweet =
    useAppSelector((state) => state.user.username) === username;

  const existsImage = image.includes("undefined");

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/tweet/${id}`);
  };
  return (
    <TweetCardStyled>
      <Card>
        <CardActionArea
          disableRipple={true}
          component="a"
          onClick={handleClick}
          aria-label="tweet"
        >
          <CardContent>
            <Grid container spacing={2}>
              <Grid
                item
                container
                xs={12}
                alignItems={"start"}
                justifyContent={"stretch"}
              >
                <Grid item xs={2} sm={1}>
                  <Avatar
                    alt={`Avatar ${username}`}
                    src={getUrlProfileAvatar(username)}
                    sx={{ width: 56, height: 56 }}
                  />
                </Grid>
                <Grid item xs={3} sm={6}>
                  <Grid item>
                    <Typography variant={"h6"} fontWeight={900} fontSize={16}>
                      {alias}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant={"subtitle1"}>{username}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant={"subtitle2"} fontSize={12}>
                      <ReactTimeAgo date={new Date(dateOfCreation)} />
                    </Typography>
                  </Grid>
                </Grid>

                <Grid
                  item
                  xs={isAuthorOfTweet ? 5 : 6}
                  sm={isAuthorOfTweet ? 4 : 5}
                >
                  <Category category={categoryConverter(category)} />
                </Grid>

                {isAuthorOfTweet && (
                  <Grid
                    item
                    container
                    xs={2}
                    sm={1}
                    justifyContent={"end"}
                    alignItems={"start"}
                  >
                    <TweetCardOptions tweetId={id} />
                  </Grid>
                )}
              </Grid>

              <Grid item xs={12}>
                <Divider />
              </Grid>

              <Grid item xs={12}>
                {description && (
                  <Grid item>
                    <Typography variant={"body1"}>{description}</Typography>
                  </Grid>
                )}
                {!existsImage && (
                  <Grid item mt={4}>
                    <img src={image} width="100%" height="300px" alt="Tweet" />
                  </Grid>
                )}
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </TweetCardStyled>
  );
};

export default TweetCard;
