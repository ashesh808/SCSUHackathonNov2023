import Container from "@mui/material/Container"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Components
import Header from "../components/Header"
import Footer from "../components/Footer"
import InfoCard from "../components/InfoCard"
import SpeakContent from "../components/SpeakContent"

let style = {
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "space-between"
}

const cardNumber = 2
const questionText = "What is 9+10?"
const answerText = "This is a stupid meme from like 10 years ago"

export default function Home() {
  return (
    <div className="App">
      <div style={style}>
        <CssBaseline />
        <Header />
        <Container sx={{ pb: '2rem', wordWrap: 'break-word' }} style={{flex: 1}}>
          <InfoCard cardNumber={cardNumber} questionText={questionText} answerText={answerText} />
          <SpeakContent textToSpeak="hello world" />
        </Container>
        <Footer />
      </div>
    </div>
  )
}