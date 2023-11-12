import React, { useState } from "react"
import { Box, Avatar, Tooltip, Pagination, Grid } from "@mui/material"
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ReplayIcon from '@mui/icons-material/Replay';
import "../components/clickable.css";
import InfoCard from "../components/InfoCard"
import SpeakContent from "../components/SpeakContent"
import PageHeader from '../components/PageHeader'
import DownloadIcon from '@mui/icons-material/Download';

// const cardNumber = 2
// const questionText = "What is 9+10?"
// const answerText = "This is a stupid meme from like 10 years ago"

// const cards = [
//   {
//     questionText: "What is 9+10?",
//     answerText: "This is a stupid meme from like 10 years ago",
//   },
//   {
//     questionText: "what is the meaning of life?",
//     answerText: "42",
//   },
//   {
//     questionText: "why do they call it oven when you of in the cold food of out hot eat the food?",
//     answerText: "yes",
//   }
// ]

//api placeholder
let cards = []
for (let i = 0; i < 50; i++) {
  cards.push({
    questionText: `question: ${i+1}`,
    answerText: `answer: ${i+1}`,
  })
}

export default function Flashcards () {
  const [currentPage, setCurrentPage] = useState(1);
  const [shuffledCards, setShuffledCards] = useState(cards);

  const [showAnswer, setShowAnswer] = useState(false);

  const shuffleCards = () => {
    // Use a copy of the original cards array to avoid mutating the original array
    const newShuffledCards = [...cards];
    for (let i = newShuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newShuffledCards[i], newShuffledCards[j]] = [newShuffledCards[j], newShuffledCards[i]];
    }
    setShuffledCards(newShuffledCards);
    setCurrentPage(1); // Reset to the first page after shuffling
  };

  const downloadJson = () => {
    const jsonContent = JSON.stringify(cards, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'flashcards.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  const handleChangePage = (event, page) => {
    setCurrentPage(page);
  };

  const currentCardIndex = (currentPage - 1) % shuffledCards.length;
  const currentCard = shuffledCards[currentCardIndex];
  
  return (
    <Box>
      <PageHeader title="Learn" />

      <Box style={{ display: "flex", justifyContent: "center", marginBottom: "0.5rem"}}>
        <Pagination count={cards.length} page={currentPage} onChange={handleChangePage} />
      </Box>
      
      <Box style={{ paddingRight: "5rem", paddingLeft: "5rem" }}>
        <InfoCard cardNumber={currentCardIndex + 1} questionText={currentCard.questionText} answerText={currentCard.answerText} showAnswer={showAnswer} setShowAnswer={setShowAnswer} />
      </Box>

      <Box style={{display: "flex", justifyContent: "center", paddingRight: "5rem", paddingLeft: "5rem"}}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
            maxWidth: "30rem",
            width: "100%"
          }}>
          <Grid item xs={2}>
            <Tooltip title="Regenerate">
              <Avatar className="clickable">
                <ReplayIcon style={{ color: 'black' }}/>
              </Avatar>
            </Tooltip>
          </Grid>
          <Grid item xs={2}>
            <Tooltip title="Shuffle" onClick={shuffleCards}>
              <Avatar className="clickable">
                <ShuffleIcon style={{ color: 'black' }}/>
              </Avatar>
            </Tooltip>
          </Grid>
          <Grid item xs={2}>
          <Tooltip title="Download JSON" onClick={downloadJson}>
            <Avatar className="clickable">
              <DownloadIcon style={{ color: 'black' }} />
            </Avatar>
          </Tooltip>
        </Grid>
          <Grid item xs={4} />
          <Grid item xs={2} style={{display: "flex", justifyContent: "flex-end"}} >
              {showAnswer
                ? <SpeakContent textToSpeak={currentCard.answerText} />
                : <SpeakContent textToSpeak={currentCard.questionText} />
              }
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
