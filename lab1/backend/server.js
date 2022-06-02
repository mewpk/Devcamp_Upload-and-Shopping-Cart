const express = require('express');
const fileupload = require("express-fileupload");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const path = require("path")


app.use(cors());
app.use(fileupload());
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())
app.use('/static' , express.static(path.join(__dirname,'public')))


app.post("/upload", (req, res) => {
    const newpath = __dirname + "/public/upload-files/";
    const file = req.files.file;
    const filename = file.name;
    // console.log(newpath,filename);
    file.mv(`${newpath}${filename}`, (err) => {
      if (err) {
        res.status(500).send({ message: "File upload failed", code: 200 });
      }
      else{
        res.status(200).send({ message: "File Uploaded", code: 200 });
      }
 
    });
  });
  



app.listen(3000 , ()=>{
    console.log("SERVER START PORT ==> 3000");

})

