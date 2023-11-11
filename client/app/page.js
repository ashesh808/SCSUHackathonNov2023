import { Box, Grid } from "@mui/material"
import CssBaseline from '@mui/material/CssBaseline';

// Components
import Flashcards from "../pages/Flashcards"
import SideBar from "../components/SideBar"

let style = {
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "space-between"
}

export default function Home() {
  return (
    <div className="App">
      <div style={style}>
        <CssBaseline />
          <Grid container spacing={0} style={{height: "100vh"}}>
            <Grid item xs={3}>
              <SideBar />
            </Grid>
            <Grid item xs={9}>
              <Box sx={{padding: "1rem"}}>
                <Flashcards />
              </Box>
            </Grid>
          </Grid>
      </div>
    </div>
  )
}
