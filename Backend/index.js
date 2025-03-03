import express from 'express';
import Connection from './database/db.js';

import dotenv from 'dotenv';
import DefaultData from './default.js';

const app = express();
const PORT = 8000;

dotenv.config();

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

// Call MongoDB connection
Connection(USERNAME,PASSWORD);

app.listen(PORT, () => console.log(`🚀 Server is running successfully on PORT ${PORT}`));

DefaultData();
