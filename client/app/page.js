import Container from "@mui/material/Container"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Components
import Header from "./components/Header"
import Footer from "./components/Footer"



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
        <Header />
        <Container sx={{ pb: '2rem', wordWrap: 'break-word' }} style={{flex: 1}}>
          hello world
        </Container>
        <Footer />
      </div>
    </div>
  )
}