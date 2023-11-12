import React from "react";
import { useRouter } from 'next/router'
import { Box } from "@mui/material";
import UploadBox from '../components/UploadBox'
import WaitModal from "@/components/WaitModal";
import PageHeader from '../components/PageHeader'

const filetypes = {
  'application/json': ['.json'],
}

export default function JSONData () {
  const router = useRouter()
  const [waiting, setWaiting] = React.useState(false)

  function onSuccess (acceptedFiles) {
    setWaiting (true)

    // This is where we make our first API call
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {
      // Close the WaitModal after receiving the response
      setWaiting(false);

      // Additional logic with the response data
      alert(JSON.stringify (data));

      router.push('/Flashcards/5555')
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
      <PageHeader title="Upload Flashcard JSON Data" />
      <Box style={{display: "flex", justifyContent: "center"}}>
        <UploadBox
          title="Upload Flashcard Data"
          subtitle="Drag a JSON file here or click to browse"
          onSuccess={onSuccess}
          onError={()=>alert ("ERROR")}
          acceptedTypes={filetypes}
        />
      </Box>

      <WaitModal open={waiting} />
    </Box>
  );
}
