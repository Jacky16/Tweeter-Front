import { Card, CardContent, Grid, Skeleton, Divider } from "@mui/material";

const TweetCardSkeleton = () => {
  return (
    <Card aria-busy={true} data-testid="TweetCardSkeleton">
      <CardContent>
        <Grid container spacing={2}>
          <Grid item container xs={12} columnGap={4}>
            <Grid container item xs={6} columnGap={4}>
              <Grid item xs={2} sm={1}>
                <Skeleton variant="circular" width={40} height={40} />
              </Grid>
              <Grid
                container
                item
                xs={4}
                sm={5}
                spacing={1}
                direction={"column"}
              >
                <Grid item>
                  <Skeleton animation="wave" height={10} />
                </Grid>
                <Grid item>
                  <Skeleton animation="wave" height={10} />
                </Grid>
                <Grid item>
                  <Skeleton animation="wave" height={10} />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={4}>
              <Skeleton animation="wave" />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Skeleton animation="wave" />
          </Grid>
          <Grid item xs={12}>
            <Skeleton
              sx={{ height: 190 }}
              animation="wave"
              variant="rectangular"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TweetCardSkeleton;
