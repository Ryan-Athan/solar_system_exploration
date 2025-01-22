import express from 'express';

// Express server setup
const exapp = express();

exapp.use(express.static('dist')); // Serve static files from the `dist` folder

// Start the Express server
exapp.listen(8000, () => {
    console.log("Server is running on http://localhost:8000"); // Corrected typo
});
