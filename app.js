const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

//init app
const app = express();

//websecurity
app.use(cors());

//db
const db = require('./server/config/keys').mongoURI;

mongoose
  .connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(()=> console.log('mongodb connected'))
  .catch(err => console.log('mongodb connect error'));

//express static folder
app.use(express.static(path.join(__dirname,'public')));  

//middleware
//for big text length 
app.use(bodyParser.json({limit:'1mb'}));
//if you want to small text length and you can use 
//"bodyParser.json()"
//app.use(bodyParser.json();

//routes

//you can use
// const post = require('./server/routes/post');
// app.use('/api/post',post);

app.use('/api/post',require('./server/routes/api/post'));

//production mode
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'public','index.html'));
})

//server
const port = process.env.PORT || 5000;
app.listen(port,()=> console.log(`Server is running on port ${port}`))

