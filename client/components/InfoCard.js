'use client'

import React from "react";
import { Typography, Paper, Box } from '@mui/material';
import "./clickable.css";

/**
 * Shows quiz questions to the user in flashcard format. Users can click to reveal the answer
 * @param {Object} props
 * @param {string} props.cardNumber The index of this card
 * @param {string} props.questionText The question
 * @param {string} props.answerText The answer
 * @returns {JSX.Element} An InfoCard component.
 */
export default function InfoCard ({ cardNumber, questionText, answerText }) {
  const [showAnswer, setShowAnswer] = React.useState(false);
  
  return (
    <Box>
      <Paper elevation={5} className="clickable" style={{padding: "1rem", transform: showAnswer ? "rotateY(180deg)" : "rotateY(0deg)", minHeight: '17rem'}}
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <Box style={{transform: showAnswer ? "rotateY(180deg)" : "rotateY(0deg)"}}>
        <Typography align="center" variant="h4">
          {showAnswer ? "Answer" : "Question"} #{cardNumber}
        </Typography>
        <Typography align="center" variant="body1">
          {showAnswer ? answerText : questionText}
        </Typography>
        </Box>
      </Paper>
    </Box>
  )
}