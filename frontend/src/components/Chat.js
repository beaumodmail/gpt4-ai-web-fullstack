import React, { useState } from 'react';
import { Box, TextField, Button, Paper, Typography } from '@mui/material';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    const response = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: input }),
    });
    const data = await response.json();
    const botMessage = { sender: 'bot', text: data.reply };
    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  return (
    <Box>
      <Paper style={{ padding: '16px', marginBottom: '16px' }}>
        {messages.map((msg, index) => (
          <Typography
            key={index}
            align={msg.sender === 'user' ? 'right' : 'left'}
            style={{
              background: msg.sender === 'user' ? '#e0f7fa' : '#f1f8e9',
              display: 'inline-block',
              padding: '8px',
              borderRadius: '8px',
              margin: '4px 0',
            }}
          >
            {msg.text}
          </Typography>
        ))}
      </Paper>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={sendMessage}
        style={{ marginTop: '8px' }}
      >
        Send
      </Button>
    </Box>
  );
}

export default Chat;
