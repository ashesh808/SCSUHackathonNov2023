import { Box, Paper, Typography, Input, IconButton } from "@mui/material";
import UploadBox from '../components/UploadBox'
import PageHeader from '../components/PageHeader'

export default function UploadPDF () {
  return (
    <Box>
      <PageHeader title="Upload PDF" />
      <Box style={{display: "flex", justifyContent: "center"}}>
        <UploadBox title="Upload a PDF" subtitle="Drag a PDF file here or click to browse" />
      </Box>
    </Box>
  );
}
