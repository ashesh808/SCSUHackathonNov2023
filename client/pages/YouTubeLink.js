import { Box, TextField, Typography, Input, IconButton } from "@mui/material";
import PageHeader from '../components/PageHeader'

export default function YouTubeLink () {
  return (
    <Box>
      <PageHeader title="YouTube Link" />
      <Box style={{display: "flex", justifyContent: "center"}}>
        <TextField id="youtubelink" label="YouTube Link" variant="outlined" fullWidth style={{maxWidth: "30rem"}} />
      </Box>
    </Box>
  );
}
