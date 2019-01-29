const express = require('express');
const path = require('path');
const parser = require('body-parser');
const PORT = 3001;
const routes = require('./routes.js');
const db = require('../database/index.js');

const app = express()

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, '../static')));

app.use("/api", routes);

app.listen(PORT, () => console.log('App is listening to PORT', PORT));