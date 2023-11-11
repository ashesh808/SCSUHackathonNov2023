'use client'

import CampaignIcon from '@mui/icons-material/Campaign';
import { Avatar } from '@mui/material'

/**
 * Speaks text aloud with TTS
 * @param {Object} props
 * @param {string} props.textToSpeak The index of this card
 * @returns {JSX.Element} A SpeakContent component.
 */
export default function SpeakContent ({ textToSpeak }) {
  const handleSpeak = () => {
    // Using the SpeechSynthesis API to speak the text
    const speech = new SpeechSynthesisUtterance(textToSpeak);
    window.speechSynthesis.speak(speech);
  };

  return (
    <div>
      <Avatar onClick={handleSpeak}>
        <CampaignIcon />
      </Avatar>
    </div>
  )
}