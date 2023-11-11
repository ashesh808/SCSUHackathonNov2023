'use client'

import React from "react";
import { Typography, Box, Modal, Button, Paper, CircularProgress } from '@mui/material';

/**
 * Shows a pop-up with a load bar. Intended to be shown while waiting for a server response
 * @returns {JSX.Element} A WaitModal component.
 */
export default function WaitModal ({  }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false)
    }
  }

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{display: "flex", alignItems: "center", justifyContent: "center"}}
      >
        <Paper sx={{padding: "2rem"}}>
          <Box style={{display: "flex", justifyContent: "center"}}>
            <CircularProgress />
          </Box>
          <Typography id="modal-modal-title" variant="h6" marginTop="1rem">
            Please wait...
          </Typography>
        </Paper>
      </Modal>
    </div>
  );
}