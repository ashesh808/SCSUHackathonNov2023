'use client'

import React from "react";
import { Typography, Paper, Box } from '@mui/material';

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
      <Paper elevation={5} sx={{
        transition: '0.3s',
        '&:hover': {
          backgroundColor: '#E8E8E8', // Change the background color when hovered
        },
        padding: "1rem"
        }}
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <Typography align="center" variant="h4">
          {showAnswer ? "Answer" : "Question"} #{cardNumber}
        </Typography>
        <Typography align="center" variant="body1">
          {showAnswer ? answerText : questionText}
        </Typography>
      </Paper>
    </Box>
  )
}