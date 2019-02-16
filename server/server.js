const path = require('path');
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();
const filePath = path.join(__dirname + '/..' +'/public' );
const port = process.env.PORT || 3000;
app.use(express.static(filePath));

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req,res){
  res.render('index');
})


 //console.log(filePath);


app.listen(port,function(){
  console.log(`listening on port ${port}`);
})
