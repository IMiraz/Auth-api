import express from 'express';
import mongoose from 'mongoose';
import path from 'path'
import bodyParser from 'body-parser'
import auth from './Routers/auth'
const app =express();
const db = mongoose.connection;

mongoose.connect('mongodb://localhost:27017/loginUser', {useNewUrlParser: true});
app.use(bodyParser.json());
app.use("/api/auth", auth)

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.listen(8080, () => console.log("Running on localhost:8080"));


