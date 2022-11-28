const express = require('express');
const db = require ('./config/db')

require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3070

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));

app.listen(PORT, function () {
    console.log(`Server Runs Perfectly at http://localhost:${PORT}`);
  });