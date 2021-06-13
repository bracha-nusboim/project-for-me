const mongoose=require('mongoose')
const employeSchema=mongoose.Schema({
    name:{
        type:String
    },
    mail:{
        type:String
    },
    password:{
        type:String
    },
    status:{
       type:String
    }
})
module.exports=mongoose.model("employe",employeSchema)