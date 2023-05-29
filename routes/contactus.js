const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/contactus', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
});

router.post('/success', (req, res, next) => {
    res.send("Data Sucessfully Submitted")
});

module.exports = router;
