import { Box, Avatar, Button } from "@mui/material"
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ReplayIcon from '@mui/icons-material/Replay';
import "../components/clickable.css";
import InfoCard from "../components/InfoCard"
import SpeakContent from "../components/SpeakContent"
import WaitModal from "../components/WaitModal"

const cardNumber = 2
const questionText = "What is 9+10?"
const answerText = "This is a stupid meme from like 10 years ago"

export default function Flashcards () {
  return (
    <Box>
      <Box style={{paddingRight: "5rem", paddingLeft: "5rem"}}>
        <InfoCard cardNumber={cardNumber} questionText={questionText} answerText={answerText} />
      </Box>
          
      <Box style={{ display: "flex", flexDirection: "row-reverse", gap: "0.5rem", bottom: '1rem', right: '1rem' }} >
        <SpeakContent textToSpeak="hello world" />
        <Avatar className="clickable">
          <ShuffleIcon />
        </Avatar>
      </Box>
          
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained">
          <ReplayIcon /> Regenerate
        </Button>
      </Box>
      <WaitModal />
    </Box>
  )
}