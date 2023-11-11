import { Typography, Box } from "@mui/material"
import PageHeader from '../components/PageHeader'

let style = {
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "space-between"
}

export default function Home() {
  return (
    <Box>
      <PageHeader title="Welcome!" />
      <Typography align="center" variant="body1">
        Please selection an option on the left to begin!
      </Typography>
    </Box>
  )
}
