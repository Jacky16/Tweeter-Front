import Grid from "@mui/material/Grid/Grid";
import FormTweet from "../../components/FormCreateTweet/FormCreateTweet";

const CreateTweetPage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <FormTweet />
      </Grid>
    </Grid>
  );
};

export default CreateTweetPage;
