import { Grid, Typography } from "@mui/material";
import FormTweet from "../../components/FormTweet/FormTweet";

const CreateTweetPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid item>
          <Typography variant="h1" fontSize={38} fontWeight={900}>
            Tweet something
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <FormTweet />
      </Grid>
    </Grid>
  );
};

export default CreateTweetPage;
