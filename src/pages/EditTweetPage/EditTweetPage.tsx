import { Grid, Typography } from "@mui/material";
import FormCreateTweet from "../../components/FormTweet/FormTweet";

const EditTweetPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Typography variant="h1" fontSize={38} fontWeight={900}>
          Edit tweet
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <FormCreateTweet isEditMode={true} />
      </Grid>
    </Grid>
  );
};

export default EditTweetPage;
