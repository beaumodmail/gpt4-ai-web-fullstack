import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box component="footer" py={3} textAlign="center">
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} GPT-4 AI Website. All rights reserved.
      </Typography>
    </Box>
  );
}
