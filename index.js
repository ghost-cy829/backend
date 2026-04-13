const express = require('express');
const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
    res.json({ message: 'NaijaRemitLock Backend API is running!' });
});

app.get('/lockboxes', (req, res) => {
    res.json({ 
        lockboxes: [
            { id: 1, purpose: "School fees", amount: 500, status: "locked" },
            { id: 2, purpose: "Rent", amount: 300, status: "released" }
        ]
    });
});

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});