const express = require("express");
const path = require("path");
const { views } = require("server/src/config/schema");

const app = express.Router();

app.use('/add-product', (req, res, next) => {
    
    res.sendFile(path.join(__dirname, '../', 'views', 'product.html'));
   
});
// app.use('/',(req, res, next) => {
//     res.sendFile(path.join(__dirname, '../', 'views', 'error.html'));
// })
module.exports = app;