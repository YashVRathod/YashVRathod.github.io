const express = require('express');
const cors = require('cors');
const Note = require('../models/notes'); // Import the Note model
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const router = express.Router();

// Enable CORS
router.use(cors());

// Define storage for the uploaded files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const destinationDir = path.join('C:/Users/yashv/OneDrive/Desktop/images');
        console.log('Destination directory:', destinationDir);
        cb(null, destinationDir); // Specify the directory where you want to store the uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Use the original filename for storing the file
    }
});



// Create multer instance
const upload = multer({ storage: storage });

// Serve images from the directory
router.use('/images', express.static(path.join('C:/Users/yashv/OneDrive/Desktop/images')));

const imagesDirectory = path.join('C:/Users/yashv/OneDrive/Desktop/images');
// POST endpoint for uploading image files
router.get('/images', (req, res) => {
    const { filename } = req.params;
    console.log("tuja",imagesDirectory);
    
    fs.readdir(imagesDirectory, (err, files) => {
        if (err) {
            console.error('Error reading images directory:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        const imageUrls = files.map(file => `/images/${file}`);
        // console.log(imageUrls);
        res.json(imageUrls);
    });
});

// DELETE Endpoint for Deleting Images
router.delete('/images/:filename', (req, res) => {
    const { filename } = req.params;
    
    const imagePath = path.join(imagesDirectory, filename);

    fs.unlink(imagePath, (err) => {
        if (err) {
            console.error('Error deleting image:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.status(200).json({ message: 'Image deleted successfully' });
    });
});


// Get all notes
router.get('/', async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add a new note
router.post('/addnote', async (req, res) => {
    try {
        const { title, body } = req.body;
        const note = new Note({ title, body });
        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a note by ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedNote = await Note.findByIdAndDelete(id);
        if (!deletedNote) {
            res.status(404).json({ message: 'Note not found' });
        } else {
            res.status(200).json(deletedNote);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
