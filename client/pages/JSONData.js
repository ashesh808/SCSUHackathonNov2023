import { Box } from "@mui/material";
import UploadBox from '../components/UploadBox'
import PageHeader from '../components/PageHeader'

export default function JSONData () {
  return (
    <Box>
      <PageHeader title="Upload Flashcard JSON Data" />
      <Box style={{display: "flex", justifyContent: "center"}}>
        <UploadBox title="Upload Flashcard Data" subtitle="Drag a JSON file here or click to browse" />
      </Box>
    </Box>
  );
}
