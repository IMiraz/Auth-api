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


app.post("/api/auth", (req, res) => {

    res.status(400).json({error:{global:"invalid error credential"}})
      });

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });




  app.listen(8080, () => console.log("Running on localhost:8080"));