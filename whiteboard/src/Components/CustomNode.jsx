import React, { useState } from 'react';
import { Box, CardContent, Typography, TextField } from '@mui/material';
import { Handle } from 'react-flow-renderer';

const CustomNode = ({ id, data, onChange }) => {
  const [title, setTitle] = useState(data.title || '');
  const [body, setBody] = useState(data.body || '');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    onChange(id, { ...data, title: e.target.value });
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
    onChange(id, { ...data, body: e.target.value });
  };

  const cardStyle = {
    backgroundColor: data.color || '#FFDAC1',
    borderRadius: '8px',
    padding: '16px',
    width: '300px',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <Box style={cardStyle}>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          <TextField
            label="Title"
            value={title}
            onChange={handleTitleChange}
            variant="standard"
            fullWidth
          />
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          <TextField
            label="Body"
            value={body}
            onChange={handleBodyChange}
            variant="standard"
            fullWidth
            multiline
            rows={4}
          />
        </Typography>
      </CardContent>
      <Handle type="source" position="left" style={{ top: '50%' }} />
      <Handle type="target" position="right" style={{ top: '50%' }} />
    </Box>
  );
};

export default CustomNode;
