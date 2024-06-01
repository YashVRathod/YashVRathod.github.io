import { Box, Button, Card, CardContent, Typography, IconButton } from '@mui/material';
import React, { useState, useCallback } from 'react';
import ReactFlow, { Background, Controls, useNodesState, useEdgesState, addEdge, ReactFlowProvider, Handle } from 'reactflow';
import 'reactflow/dist/style.css';
import useFetch from './useFetch';
import { useParams } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import html2canvas from "html2canvas";
import jsPdf from "jspdf";
import './compo.css'; 

const inputStyle = {
  width: '100%',
  padding: '8px',
  marginBottom: '16px',
  border: 'none',
  outline: 'none',
  fontSize: '30px',
};

const inputStyle2 = {
  width: '100%',
  padding: '8px',
  marginBottom: '16px',
  border: 'none',
  outline: 'none',
  fontSize: '15px',
};

const getRandomColor = () => {
  const colors = ['#FFDAC1', '#B5EAD7', '#AED9E0', '#FFB7B2', '#E2F0CB', '#FFC3A0', '#FFB7B2', '#B5EAD7', '#FFFADA'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const CustomNode = ({ id, data }) => {
  const [title, setTitle] = useState(data.title || '');
  const [body, setBody] = useState(data.body || '');
  const [color, setColor] = useState(getRandomColor());

  const handleClick = () => {
    const note = { title, body };
    fetch('http://localhost:8000/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note),
    }).then(() => {
      alert('New note added');
    });
  };

  return (
    <Box width='300px' style={{ backgroundColor: color }}>
      <Card style={{ backgroundColor: color }}>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            <input
              type='text'
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Enter heading'
              style={{ ...inputStyle, backgroundColor: color }}
              value={title}
            />
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            <textarea
              rows='4'
              cols='50'
              placeholder='Enter body'
              onChange={(e) => setBody(e.target.value)}
              style={{ ...inputStyle2, resize: 'vertical', backgroundColor: color }}
              value={body}
            ></textarea>
          </Typography>
          <Button onClick={handleClick}>Submit</Button>
          <IconButton
            sx={{
              color: 'red',
              position: 'absolute',
              bottom: 16,
              right: 16,
              '&:hover': {
                color: 'white',
                backgroundColor: 'red',
              },
            }}
          ></IconButton>
        </CardContent>
      </Card>
      <Handle type="source" position="left" style={{ top: '50%' }} />
      <Handle type="target" position="right" style={{ top: '50%' }} />
    </Box>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

const initialNodes = [];

function NoteNew() {
  const { id } = useParams();
  const { data } = useFetch();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const addCardNode = () => {
    const newNodeId = `${nodes.length + 1}`;
    const newNode = {
      id: newNodeId,
      position: { x: nodes.length * 320, y: 0 },
      data: { title: '', body: '' },
      type: 'custom',
    };
    setNodes((nds) => nds.concat(newNode));
  };

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <ReactFlowProvider>
      <Button onClick={addCardNode}><AddIcon /></Button>
      <div className="react-flow-container">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          nodeTypes={nodeTypes}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
}

export default NoteNew;
