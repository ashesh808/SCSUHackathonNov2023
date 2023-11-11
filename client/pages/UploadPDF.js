'use client'

import React from "react";
import { Box, Paper, Typography, Input, IconButton } from "@mui/material";
import { useRouter } from 'next/router'
import UploadBox from '../components/UploadBox'
import PageHeader from '../components/PageHeader'
import WaitModal from "@/components/WaitModal";

const filetypes = {
  'application/pdf': ['.pdf'],
}

export default function UploadPDF () {
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
      <PageHeader title="Upload PDF" />
      <Box style={{display: "flex", justifyContent: "center"}}>
        <UploadBox
          onSuccess={onSuccess}
          onError={()=>alert ("ERROR")}
          acceptedTypes={filetypes}
          title="Upload a PDF"
          subtitle="Drag a PDF file here or click to browse"
        />
      </Box>

      <WaitModal open={waiting} />
    </Box>
  );
}
