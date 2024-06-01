import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ReactMarkdown from 'react-markdown';

const drawerWidth = 280;

const StyledDrawer = styled(Drawer)({
  '& .MuiDrawer-paper': {
    width: drawerWidth,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  justifyContent: 'flex-start',
  ...theme.mixins.toolbar,
}));

export default function PersistentDrawerRight({ onMarkdownChange }) {
  const [open, setOpen] = useState(false);
  const [markdownContent, setMarkdownContent] = useState('');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleTextareaChange = (event) => {
    const content = event.target.value;
    setMarkdownContent(content);
    onMarkdownChange(content); // Pass the markdown content to the parent component
  };

  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerOpen}
        sx={{ mr: 2, ...(open &&
          { display: 'none' }) }}
      >
        <MenuIcon />
      </IconButton>
      <StyledDrawer
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <textarea
          value={markdownContent}
          onChange={handleTextareaChange}
          placeholder="Enter Markdown Content"
          style={{ width: '100%', height: '200px' }}
        />
        <Divider />
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
        <Divider />
      </StyledDrawer>
    </div>
  );}