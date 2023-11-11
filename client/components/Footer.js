import { Box, Container, Grid, Typography } from "@mui/material";

const pageTitle = "WEBSITE TITLE HERE"

// TODO: https://frontendshape.com/post/create-a-footer-in-react-mui-5
export default function Footer () {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "grey",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              {pageTitle}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};