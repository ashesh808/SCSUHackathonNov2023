import React from 'react';
import { Box, Paper, Grid, Button } from '@mui/material';
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
    <Box sx={{ width: '100%', height: '100%' }}>
      <Paper elevation={5} sx={{ width: '100%', height: '100%', padding: '0.5rem' }}>
        <Grid container rowSpacing={1} direction="column" justifyContent="center" alignItems="center">
          <Grid item>
            <img 
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.adaptivewfs.com%2Fpartners%2Flogo-placeholder-image%2F&psig=AOvVaw0f27cnicyGA4jqOFfHa9wS&ust=1699807742162000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLDuybezvIIDFQAAAAAdAAAAABAE"
              width={50}
              height={50}
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
    </Box>
  );
}
