require('dotenv').config();
const express = require('express');
const cors = require('cors');
const ynotesRoutes = require('./routes/ynotes');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})
// Routes
app.use('/api/ynotes', ynotesRoutes); // Mount the ynotes routes under the '/api/ynotes' path

// Connect to the database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    });
