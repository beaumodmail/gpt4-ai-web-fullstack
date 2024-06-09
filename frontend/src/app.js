import React from 'react';
import { Container, CssBaseline, Typography } from '@mui/material';
import Header from './components/Header';
import Chat from './components/Chat';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Container component="main" maxWidth="md">
        <Typography variant="h4" gutterBottom>
          GPT-4 AI Chat
        </Typography>
        <Chat />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
