const { default: mongoose } = require("mongoose")

const EmployeeSchema= new mongoose.Schema({
    logo:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const EmployeeModel=mongoose.model("employees",EmployeeSchema)
module.exports=EmployeeModel