const express = require('express');
const fileupload = require("express-fileupload");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(fileupload());
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())







app.listen(3000 , ()=>{
    console.log("SERVER START PORT ==> 3000");

})

