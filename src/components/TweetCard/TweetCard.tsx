import Avatar from "@mui/material/Avatar/Avatar";
import Card from "@mui/material/Card/Card";
import CardActionArea from "@mui/material/CardActionArea/CardActionArea";
import CardContent from "@mui/material/CardContent/CardContent";
import Divider from "@mui/material/Divider/Divider";
import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Tweet } from "../../types";
import Category from "../Category/Category";
import TweetCardStyled from "./TweetCardStyled";
import IconButton from "@mui/material/IconButton/IconButton";
import categoryConverter from "../../utils/categoryConverter/categoryConverter";
import { useNavigate } from "react-router-dom";
import TimeAgo from "timeago-react";
interface TweetCardProps {
  tweet: Tweet;
}
const TweetCard = ({
  tweet: { alias, category, dateOfCreation, username, description, image, id },
}: TweetCardProps) => {
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
              <Grid item container xs={12} columnGap={3}>
                <Grid item xs={1}>
                  <Avatar />
                </Grid>
                <Grid item xs={4}>
                  <Typography variant={"h6"} fontWeight={900} fontSize={16}>
                    {alias}
                  </Typography>
                  <Typography variant={"subtitle1"}>{username}</Typography>
                  <Typography variant={"subtitle2"} fontSize={12}>
                    <TimeAgo datetime={dateOfCreation} live={true} />
                  </Typography>
                </Grid>
                <Grid item md={4}>
                  <Category category={categoryConverter(category)} />
                </Grid>
                <Grid
                  item
                  container
                  xs={1}
                  justifyContent={"center"}
                  alignItems={"start"}
                >
                  <IconButton aria-label="Tweet Options">
                    <MoreHorizIcon />
                  </IconButton>
                </Grid>
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
                {image && (
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
