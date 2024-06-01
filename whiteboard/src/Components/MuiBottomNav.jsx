import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from "react";
import NewNote from './NewNote'; // Import the NewNote component

function MuiBottomNav() {
  const [value, setValue] = useState(0);
  const [notes, setNotes] = useState([]); // State to hold the list of notes

  const handleClick = () => {
    setNotes([...notes, { id: notes.length }]); // Add a new note with a unique ID
  }

  return (
    <>
      <div>
        {notes.map(note => (
          <NewNote key={note.id} /> // Render the NewNote component for each note
        ))}
      </div>
      <BottomNavigation
        sx={{ width: '100%', position: 'absolute', bottom: 0 }}
        value={value}
        onChange={(event, newValue) => { setValue(newValue) }}
      >
        <BottomNavigationAction label='Home' icon={<HomeIcon />} />
        <BottomNavigationAction label='Add Notes' icon={<AddIcon />} onClick={handleClick} />
        <BottomNavigationAction label='Arrow' icon={<ArrowForwardIcon />} />
      </BottomNavigation>
    </>
  );
}

export default MuiBottomNav;
