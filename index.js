require('dotenv').config()
const express = require('express');
const cors = require('cors');
const bookRoutes = require('./routes/book.routes');

const app = express();
const db = require('./db');
const cron = require('./cron/cron');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/book', bookRoutes);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});