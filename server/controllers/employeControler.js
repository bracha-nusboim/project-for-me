const mongoose=require('mongoose')
const Employe=require('../model/employes')
const jwt=require("jsonwebtoken")
const addEmploye=async(req,res)=>
{
    try{
        const currentEmploye=new Employe(req.body);
        currentEmploye.save()
        .then((data)=>
        {
          res.send('seccesse')
          .catch(err=>{
              console.log(err);
          })
        })
        
    } catch(err){
    console.log(err)}
}
const checkPermition=async(req,res)=>{
 const e=await Employe.findOne({"mail":req.params.mail,"password":req.params.password})
 if(e){
 const token=jwt.sign({mail:e.mail,password:e.password},process.env.MY_SIKRET)
 res.send(token);
 }
 else
  res.send("not found")
}
const getAllEmploye=async(res)=>{
    Employe.find({},function(err,users){
        res.send(users);
    })}



module.exports={addEmploye,checkPermition,getAllEmploye}
