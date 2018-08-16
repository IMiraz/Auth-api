import express from 'express';
import mongoose from 'mongoose';
import path from 'path'
import bodyParser from 'body-parser'
import auth from './Routers/auth'
import users from './Routers/users'
import dotenv from 'dotenv'
import Promise from 'bluebird'


const app =express();


dotenv.config()
mongoose.Promise=Promise;
const db = mongoose.connection;

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true});
app.use(bodyParser.json());
app.use("/api/auth", auth)

app.use("/api/auth", users)

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.listen(8080, () => console.log("Running on localhost:8080"));


