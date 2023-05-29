const express = require("express");
const product = require('./routes/add-product');
const shop = require('./routes/shop');
const router=require('./routes/contactus')
const app = express();

app.use(express.static('public'));
app.use(product);
app.use(shop);
app.use(router)



app.listen(8000);