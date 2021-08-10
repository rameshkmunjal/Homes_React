const express = require('express');
const app = express();
const mongoose = require('mongoose');
const homeRoutes = require('./routes/index');

const cors = require('cors');

//app.use(bodyParser.json({ extended: true }));
//app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

app.use(cors());

app.use('/', homeRoutes);


const CONNECTION_URL = 'mongodb://127.0.0.1:27017/homeDB';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, })
    .then(() => { app.listen(PORT, () => { console.log("server is listening on : " + PORT) }) })
    .catch((error) => { console.log(error.message) });
