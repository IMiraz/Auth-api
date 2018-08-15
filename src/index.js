import express from 'express';
import mongoose from 'mongoose';
import path from 'path'
import bodyParser from 'body-parser'
import auth from './Routers/auth'
import dotenv from 'dotenv'


const app =express();

dotenv.config()

const db = mongoose.connection;

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true});
app.use(bodyParser.json());
app.use("/api/auth", auth)

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.listen(8080, () => console.log("Running on localhost:8080"));


