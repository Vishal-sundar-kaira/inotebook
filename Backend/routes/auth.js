const express=require('express')
const User=require('../models/User')
const router=express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const fetchuser=require('../middleware/fetchuser')
var jwt = require('jsonwebtoken');
var JWT_SECRET='Vishal is a good boy';
//use post for more security otherwise in get method password can be seen in url or any other way.with post no one can make any changes in our endpoints.
//after sending request through post we set some restriction in name and email and password and add express validation if its valid then it will go on database else it will show what is wrong as per set restriction and then use User.create and print array and you can also add catch for catching error.
//Route1:FOR SIGN IN:
router.post('/Createuser',[//here we are sending our necessity like password should be of this lenghth only.
    body('email',"enter valid name").isEmail(),
    body('name','Enter name of more than 3 character').isLength({ min: 3 }),
    body('password',"Enter password more than 5 length").isLength({ min: 5 }),
],async(req,res)=>{//here we are cathching error as per given necessity.
  let success=false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success,errors: errors.array() });
    }
    let user=await User.findOne({email:req.body.email});
    if(user){
        return res.status(400).json({success,error:"Sorry a user with this email id already exist"})//here we are catching schema error already exist and unique.
    }
    try{//with this try we are catching any code error.
      const salt=await bcrypt.genSalt(10);
      const secpass=await bcrypt.hash(req.body.password,salt);
      console.log(secpass)
    user = await User.create({
        name: req.body.name,
        password: secpass,
        email: req.body.email,
      })
      const data={
        user:{
          id:user.id
        }
      }
    const authtoken=jwt.sign(data,JWT_SECRET);
    //   .then(user => res.json(user))
    //   .catch(err=>console.log("error"));
    success=true;
    res.json({success,authtoken})
    }catch(error){
      console.error(error.message);
      res.status(500).send("Some error Ocuured");
    }
})
//Route2:for login.
//Authenticate a user using:POST"/api/auth/login".NO login required.
router.post('/login',[//here we are sending our necessity like password should be of this lenghth only.
    body('email',"enter valid name").isEmail(),
    body('password',"password cannot be blank").exists()
],async(req,res)=>{
  var success=false
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({success, errors: errors.array() });
  }
  const {email,password}=req.body;
  try{
    let user=await User.findOne({email});
    console.log(user)
    if(!user)
    {
      return res.status(400).json({error:"Please try to login with correct credential"})
    }
    const passwordcompare=await bcrypt.compare(password, user.password)//we use bcrypt compare because it compare also the salt added into your password
    console.log(passwordcompare)
    if(!passwordcompare)
    {
      return res.status(400).json({success,error:"Please try to login with correct credential"})
    }
    const data={
      user:{
        id:user.id
      }
    }
    const authtoken=jwt.sign(data,JWT_SECRET);
    success=true;
    res.json({success,authtoken})
    
  }catch(error){
  console.error(error.message);
    res.status(500).send("Internal server error Ocuured");
}})
//Route 3:Get user detail.
//using post /api/auth/getuser.
router.post('/getuser',fetchuser,async (req,res)=>{
  try{
    const userid=req.user.id;
    console.log(userid);
    const user=await User.findById(userid).select("-password")
    res.send(user)
  }catch(error){
    console.error(error.message);
    res.status(500).send("Internal server error Ocuured");
  }
})
module.exports=router