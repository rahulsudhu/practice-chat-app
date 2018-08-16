/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const path = require('path');
const express = require('express');

var publicPath = path.join(__dirname, '../html');
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(publicPath));


app.listen(port, () => {
    console.log(`Started on ${port}`);
});
