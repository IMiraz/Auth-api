import express from 'express';
import mongoose from 'mongoose';
import path from 'path'

const app =express();

mongoose.connect('mongodb://localhost/users');

const db = mongoose.connection;
db.on('error', (err) => console.log('error'))
db.once('open', () => {
  console.log('mongoosed database connected')
});

const Schema = mongoose.Schema;
const userSchema = new Schema({
  name:{
    type:String,
    required:true,
    // index:true,
    minlength:3
  },
  email: {
    type:String,
    required:true,
    minlength:5,
    lowercase:true

  },
  password:  {
    type:String,
    required:true,
    minlength:3,

  }
});

const User = mongoose.model('User', userSchema);

app.post("/api/auth", (req, res) => {

    res.status(400).json({error:{global:"invalid error credential"}})
      });

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });




  app.listen(8080, () => console.log("Running on localhost:8080"));