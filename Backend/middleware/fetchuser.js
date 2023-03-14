//middle ware is the fuction which can run between req and response and can make changes in it we can make one time  middleware  function and ise it before req and res 
var jwt = require('jsonwebtoken');
var JWT_SECRET='Vishal is a good boy';
const fetchuser=(req,res,next)=>{
    const token=req.header('auth-token');
if(!token){
    res.status(401).send({error:"please authenticate using valid token"});}
try{
    const data=jwt.verify(token,JWT_SECRET);
    req.user=data.user;
    next();
}catch(error){
    res.status(401).send({error:"please authenticate using valid token error"});
}
}

module.exports=fetchuser;