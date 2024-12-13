const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Start the server
const PORT = 3000; // You can change this port as needed
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});