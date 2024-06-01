import { Box, Button, Card, CardContent, Typography, Drawer } from '@mui/material';
import React, { useState, useCallback, useEffect } from 'react';
import ReactFlow, { Background, Controls, useNodesState, useEdgesState, addEdge, ReactFlowProvider, Handle } from 'reactflow';
import 'reactflow/dist/style.css';
import AddIcon from '@mui/icons-material/Add';
import DownloadButton from './DownloadButton';
import ReactMarkdown from 'react-markdown';

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
  const [color] = useState(getRandomColor());

  const cardStyle = {
    backgroundColor: color,
    borderRadius: '8px',
    padding: '16px',
    width: '300px',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
  };

  const headingStyle = {
    marginTop: '5px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  };

  const bodyStyle = {
    '--webkit-line-clamp': 5,
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
  };

  return (
    <Box style={cardStyle}>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div' style={headingStyle}>
          <ReactMarkdown>{data.title || "Enter heading..."}</ReactMarkdown>
        </Typography>
        <Typography variant='body2' color='text.secondary' style={bodyStyle}>
          <ReactMarkdown>{data.body || "Enter body..."}</ReactMarkdown>
        </Typography>
        {data.error && <p style={{ color: 'red' }}>{data.error}</p>}
      </CardContent>
      <Handle type="source" position="left" style={{ top: '50%' }} />
      <Handle type="target" position="right" style={{ top: '50%' }} />
    </Box>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

const initialNodes = [];

function Note() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [rightTextareaHeading, setRightTextareaHeading] = useState('');
  const [rightTextareaBody, setRightTextareaBody] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedNodeId, setSelectedNodeId] = useState(null);
 

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const addCardNode = () => {
    const newNodeId = `${nodes.length + 1}`;
    const newNode = {
      id: newNodeId,
      position: { x: 0, y: nodes.length * 2 },
      data: { title: '', body: '' },
      type: 'custom',
    };
    setNodes((nds) => nds.concat(newNode));
    setSelectedNodeId(newNodeId);
    toggleDrawer();
  };

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const handleHeadingChange = (e) => {
    setRightTextareaHeading(e.target.value);
    setNodes((nds) =>
      nds.map((node) =>
        node.id === selectedNodeId ? { ...node, data: { ...node.data, title: e.target.value } } : node
      )
    );
  };

  const handleBodyChange = (e) => {
    setRightTextareaBody(e.target.value);
    setNodes((nds) =>
      nds.map((node) =>
        node.id === selectedNodeId ? { ...node, data: { ...node.data, body: e.target.value } } : node
      )
    );
  };

  useEffect(() => {
    if (selectedNodeId) {
      const selectedNode = nodes.find((node) => node.id === selectedNodeId);
      if (selectedNode) {
        setRightTextareaHeading(selectedNode.data.title);
        setRightTextareaBody(selectedNode.data.body);
      }
    }
  }, [selectedNodeId, nodes]);

  const onNodeClick = (event, node) => {
    console.log('Node clicked:', node.id);
    setSelectedNodeId(node.id);
    toggleDrawer();
  };

  const handleGallery = () => {
    window.location.href = '/image';
  }

  return (
    <ReactFlowProvider>
      <div className="container">
        <Button
          sx={{
            background: 'linear-gradient(135deg, #f06, #f93)',
            color: '#fff',
            marginTop: '1rem',
            width: '4rem',
            height: '4rem',
            marginLeft: '0'
          }}
          onClick={addCardNode}
        >
          <AddIcon sx={{ fontSize: 18}} />
        </Button>

        <Button 
        sx={{
            background: 'linear-gradient(135deg, #f06, #f93)',
            color: '#fff',
            marginTop: '1rem',
            width: '10rem',
            height: '4rem',
            marginLeft: '50rem'
          }} onClick={handleGallery}>Image Gallery</Button>

        <DownloadButton sx={{ mr: 1 }} />
      
        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
          <div style={{ width: 300, padding: 16 }}>
            <textarea
              rows="3"
              cols="30"
              placeholder="Enter heading here..."
              value={rightTextareaHeading}
              onChange={handleHeadingChange}
              style={inputStyle2}
            ></textarea>
            <textarea
              rows="16"
              cols="30"
              placeholder="Enter body here..."
              value={rightTextareaBody}
              onChange={handleBodyChange}
              style={inputStyle2}
            ></textarea>
          </div>
        </Drawer>
      </div>
      <div className="react-flow-container" style={{ height: '100vh', width: '100%' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
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

export default Note;
