const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html'))
    })
} else {
    app.get('/', (req, res) => res.send('Please set to production'));
}



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})