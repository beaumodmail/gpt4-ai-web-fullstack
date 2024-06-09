import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          GPT-4 AI Website
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
