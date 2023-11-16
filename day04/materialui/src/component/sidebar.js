import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './sidebar.css';
export default function FullWidthTextField() {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        
      }}
    >
        <TextField fullWidth label="Name" sx={{marginLeft:25, marginTop:25,}} id="fullWidth" />
    </Box>
  );
}
