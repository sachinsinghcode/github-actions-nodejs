const express = require('express');
const app = express();

// Use Azure-assigned port
const PORT = process.env.PORT || 3000;

// Route
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Sample Page of NodeJs</title>
        </head>
        <body>
            <h1>This is a Sample Page Deployed using Github Actions OIDC</h1>
        </body>
        </html>
    `);
});

// Listen on 0.0.0.0 for Azure
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});