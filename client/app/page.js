import { Container, Box, Avatar, Button } from "@mui/material"
import CssBaseline from '@mui/material/CssBaseline';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ReplayIcon from '@mui/icons-material/Replay';
import "../components/clickable.css";

// Components
import Header from "../components/Header"
import Footer from "../components/Footer"
import InfoCard from "../components/InfoCard"
import SpeakContent from "../components/SpeakContent"
import WaitModal from "../components/WaitModal"

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
        <Container sx={{ pb: '2rem', wordWrap: 'break-word', position: 'relative' }} style={{ flex: 1 }}>
          <Box style={{paddingRight: "5rem", paddingLeft: "5rem"}}>
            <InfoCard cardNumber={cardNumber} questionText={questionText} answerText={answerText} />
          </Box>
          
          <Box style={{ display: "flex", flexDirection: "row-reverse", gap: "0.5rem", position: 'absolute', bottom: '1rem', right: '1rem' }} >
            <SpeakContent textToSpeak="hello world" />
            <Avatar className="clickable">
              <ShuffleIcon />
            </Avatar>
          </Box>
          
          <Box style={{ display: "flex", justifyContent: "flex-start", position: 'absolute', bottom: '1rem', left: '1rem' }}>
            <Button variant="contained">
              <ReplayIcon /> Regenerate
            </Button>
          </Box>

          <WaitModal />
        </Container>
        <Footer />
      </div>
    </div>
  )
}
