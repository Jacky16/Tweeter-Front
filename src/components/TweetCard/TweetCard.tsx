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
import { CardActions, IconButton } from "@mui/material";
import TweetCardStyled from "./TweetCardStyled";

interface TweetCardProps {
  tweet: Tweet;
}
const TweetCard = ({
  tweet: { alias, category, dateOfCreation, username, description, image },
}: TweetCardProps) => {
  return (
    <TweetCardStyled>
      <Card component={"article"}>
        <CardActionArea disableRipple={true} component="a">
          <CardContent>
            <Grid
              container
              spacing={2}
              alignItems={"flex-start"}
              justifyContent={"space-between"}
            >
              <Grid item container xs={12} justifyContent={"flex-end"}>
                <Grid item xs={2} md={1}>
                  <Avatar />
                </Grid>
                <Grid
                  item
                  flexDirection={"column"}
                  justifyContent={"center"}
                  xs={4}
                  md={6}
                >
                  <Typography variant={"h6"} fontWeight={900} fontSize={16}>
                    {alias}
                  </Typography>
                  <Typography variant={"subtitle1"}>{username}</Typography>
                  <Typography variant={"subtitle2"}>
                    {dateOfCreation}
                  </Typography>
                </Grid>
                <Grid item xs={5} md={4}>
                  <Category category={category} />
                </Grid>
                <Grid
                  item
                  xs={1}
                  justifyContent={"flex-end"}
                  alignItems={"end"}
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