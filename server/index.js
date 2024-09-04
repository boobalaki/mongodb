const express =require('express')

const { default: mongoose } = require('mongoose')


// const mongoose = require('mongoose')
const { default: cors} =require('cors')
// const cors = require("cors")
 const app =express()

//  app.use(express.json())
// app.use(cors())
const EmployeeModel=require("./model/Employee")


// require('./db/conection')
mongoose.connect("mongodb://127.0.0.1:27017/employee");
 
// app.get("/",cors(),(req,res)=>{
   
// })
app.post("/login",(req,res)=>{
   const{email,password}= req.body;
   EmployeModel.findne({email:email})
   .then(user=>{
      if(user.password===password){
         res.json("success")
      
      }
      else{
         res.json("The  password is incorrect")
      }
   })
})
// const User =require('./model/User')
// app.use(cors());
// app.post("/register",(req,res) =>{
// EmployeeModel.create(req.body)
// .then(employees=>res.json(employees))
// .catch(err=>res.json(err))
// })

 app.listen(3001,()=>{
    console.log("serveris Running");
    
 })