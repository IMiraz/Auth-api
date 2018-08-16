import express  from 'express'
import User from '../models/user'

const router = express.Router()

router.post("/", (req, res) =>{
const {email, password} = req.body.user;
const user = new User({ email});
user.setPassword=(password)
user.save();

//  User.findOne({email: credentials.email}).then(user => {

// if(user && user.isValidPassword(credentials.password))
//  {
//  res.json({user:user.toAuthJSON()})
// }

// else {
//   res.status(400).json({error:{global:"invalid credentials"}});
// }

});

});

export default router