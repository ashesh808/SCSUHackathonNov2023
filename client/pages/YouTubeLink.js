import React from "react";
import { Box, TextField, InputAdornment, Button } from "@mui/material";
import { useRouter } from 'next/router'
import PageHeader from '../components/PageHeader'
import YouTubeIcon from '@mui/icons-material/YouTube';
import BackupIcon from '@mui/icons-material/Backup';
import WaitModal from "@/components/WaitModal";

export default function YouTubeLink () {
  const router = useRouter()
  const [waiting, setWaiting] = React.useState(false)

  function onSubmit (acceptedFiles) {
    setWaiting (true)

    // This is where we make our first API call
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {
      // Close the WaitModal after receiving the response
      setWaiting(false);

      // Additional logic with the response data
      alert(JSON.stringify (data));

      router.push('/Flashcards')
    })
    .catch(error => {
      // Handle errors, close the WaitModal, and show an error message
      setWaiting(false);
      console.error("Error fetching data:", error);
      alert("Error fetching data. Please try again.\n" + error);
    })
  }
  
  return (
    <Box>
      <PageHeader title="YouTube Link" />
      <Box style={{display: "flex", alignItems: "center", flexDirection: "column", gap: "1rem"}}>
        <TextField
          id="youtubelink"
          label="YouTube Link"
          variant="outlined"
          fullWidth
          autoFocus 
          style={{maxWidth: "30rem"}}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <YouTubeIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button startIcon={<BackupIcon />} variant="contained" onClick={onSubmit}>
          Submit
        </Button>
      </Box>

      <WaitModal open={waiting} />
    </Box>
  );
}
