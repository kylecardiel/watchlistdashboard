/* eslint-disable no-console */
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const serverPort = 4000;

mongoose.connect(process.env.DATABASE_URL_LOCAL, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());
app.use(cors());

const symbolsRouter = require('./routes/symbols.routes');
app.use('/dashboard', symbolsRouter);


// eslint-disable-next-line no-unused-vars
const server = app.listen(serverPort, () => {
    console.log('Connected to port ' + serverPort);
});