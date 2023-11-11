import React from 'react';
import { Box, Paper, Grid, Button, Typography } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import YouTubeIcon from '@mui/icons-material/YouTube';
import DataObjectIcon from '@mui/icons-material/DataObject';

const sideBarData = [
  {
    title: 'Upload PDF',
    icon: PictureAsPdfIcon,
    url: '/uploadpdf',
  },
  {
    title: 'YouTube Link',
    icon: YouTubeIcon,
    url: '/youtubelink',
  },
  {
    title: 'JSON Data',
    icon: DataObjectIcon,
    url: '/jsondata',
  },
];

export default function SideBar() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Paper elevation={10} sx={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#B0B0B0', padding: '0.5rem' }}>
        <Grid container rowSpacing={1} direction="column" justifyContent="center" alignItems="center">
          <Grid item>
            <img
              src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image-300x300.png.webp"
              style={{
                width: '10rem',
                height: '10rem',
              }}
            />
          </Grid>

          {sideBarData.map((item, index) => (
            <Grid item key={index} sx={{ width: '100%' }}>
              <Button variant="contained" startIcon={<item.icon />} fullWidth>
                {item.title}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Box style={{backgroundColor: "#808080", padding: "0.5rem"}}>
        <Typography align="center" variant="subtitle1" style={{fontSize: "0.8rem"}}>
            Made for the SCSU Fall 2023 Hackathon
        </Typography>
      </Box>
    </Box>
  );
}
