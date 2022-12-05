import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import FormCreateTweet from "../../components/FormTweet/FormTweet";

const EditTweetPage = () => {
  return (
    <Grid container direction={"column"} rowGap={2}>
      <Grid item xs={12}>
        <Typography variant="h1" fontSize={38} fontWeight={900}>
          Edit tweet
        </Typography>
        <Grid item xs={12}>
          <FormCreateTweet isEditMode={true} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditTweetPage;
