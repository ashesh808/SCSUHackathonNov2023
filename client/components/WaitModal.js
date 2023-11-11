'use client'

import React from "react";
import { Typography, Box, Modal, Button, Paper } from '@mui/material';

export default function WaitModal () {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <Typography id="modal-modal-title" variant="h6">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Paper>
      </Modal>
    </div>
  );
}