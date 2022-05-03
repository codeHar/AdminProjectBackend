const Employee=require("../models/employeeModel")

exports.getEmployee=async(req,res)=>{
    try{
        let employees=await Employee.find({role:"employee"}).select("-password")
        if(!employees || employees.length==0){
            return res.status(400).json({
                status:false,
                message:"No employees found"
            })
        }
        return res.status(200).json({
            status:true,
            message:"Employees found",
            noOfEmployees:employees.length,
            employees:employees
        })
    }
    catch(err){
        return res.status(400).json({
            status:false,
            message:"Error while getting employees",
            err
        })
    }
    
}

exports.postEmployee=async(req,res)=>{
    const {firstName,lastName,email,password,phone,address,post,gender,active}=req.body
    if(!firstName || !email || !password || !phone || !address || !post || !gender){
        return res.status(400).json({
            status:false,
            message:"All compulsory fields are required"
        })
    }

    let employee=new Employee({
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password,
        phone:phone,
        address:address,
        post:post,
        gender:gender.toLowerCase(),
        active:active
    })
    try{
        employee=await employee.save()
    }
    catch(err){
        return res.status(400).json({
            status:false,
            message:"Error while saving Employee",
            err
        })
    }
    
    return res.status(200).json({
        status:true,
        message:"Employee saved successfully",
    })
}