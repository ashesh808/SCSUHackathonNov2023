import React, { useState } from "react"
import { Box, Avatar, Tooltip, Pagination, Grid } from "@mui/material"
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ReplayIcon from '@mui/icons-material/Replay';
import "../components/clickable.css";
import InfoCard from "../components/InfoCard"
import SpeakContent from "../components/SpeakContent"
import PageHeader from '../components/PageHeader'

const cardNumber = 2
const questionText = "What is 9+10?"
const answerText = "This is a stupid meme from like 10 years ago"

const cards = [
  {
    questionText: "What is 9+10?",
    answerText: "This is a stupid meme from like 10 years ago",
  },
  {
    questionText: "what is the meaning of life?",
    answerText: "42",
  },
  {
    questionText: "why do they call it oven when you of in the cold food of out hot eat the food?",
    answerText: "yes",
  }
]

export default function Flashcards () {
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangePage = (event, page) => {
    setCurrentPage(page);
  };

  const currentCardIndex = (currentPage - 1) % cards.length;
  const currentCard = cards[currentCardIndex];
  
  return (
    <Box>
      <PageHeader title="Learn" />

      <Box style={{ display: "flex", justifyContent: "center", marginBottom: "0.5rem"}}>
        <Pagination count={cards.length} page={currentPage} onChange={handleChangePage} />
      </Box>
      
      <Box style={{ paddingRight: "5rem", paddingLeft: "5rem"}}>
        <InfoCard cardNumber={currentCardIndex + 1} questionText={currentCard.questionText} answerText={currentCard.answerText} />
      </Box>

      <Grid container justifyContent="center" alignItems="center" style={{ marginTop: "1rem", marginBottom: "1rem", paddingRight: "5rem", paddingLeft: "5rem" }}>
        <Grid item xs={2}>
          <Tooltip title="Regenerate">
            <Avatar className="clickable">
              <ReplayIcon />
            </Avatar>
          </Tooltip>
        </Grid>
        <Grid item xs={2}>
          <Tooltip title="Shuffle">
            <Avatar className="clickable">
              <ShuffleIcon />
            </Avatar>
          </Tooltip>
        </Grid>
        <Grid item xs={6} />
        <Grid item xs={2}>
          <Tooltip title="Speak">
            <SpeakContent textToSpeak="hello world" />
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  )
}
