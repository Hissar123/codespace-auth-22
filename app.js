// We will write everything in app.js and export it to index.js
// i.e index.js will simply behaves like listener

require('dotenv').config()

const express = require('express');

const app = express()

app.get("/", (req, res)=>{
    res.send("<h1>Server is working</h1>");
})


module.exports = app