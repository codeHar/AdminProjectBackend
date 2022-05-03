const Employee=require("../models/employeeModel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

exports.login=async(req,res)=>{
    const {email,password}=req.body
    if(!email || !password){
        return res.status(400).json({
            status:false,
            message:"All fields are required"
        })
    }

    try{
        let employee=await Employee.findOne({email:email})
        if(!employee){
            return res.status(400).json({
                status:false,
                message:"Employee not found"
            })
        }

        let isMatch=await bcrypt.compare(password,employee.password)

        if(!isMatch){
            return res.status(400).json({
                status:false,
                message:"Invalid password"
            })
        }

        const token=jwt.sign(
            {
                employeeId:employee._id,
            },
            process.env.TOKEN_KEY,
            {
                expiresIn:"2h"
            }
        )

        return res.status(200).json({
            status:true,
            message:"Login successful",
            token
        })
    }
    catch(err){

    }
}