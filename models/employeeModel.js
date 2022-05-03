const mongoose=require('mongoose');
const { nameValidator, emailValidator, phoneValidator, addressValidator, postValidator, passwordValidator } = require('../validation/employeeValidation');
const schema=mongoose.Schema

let employeeSchema=new schema({
    firstName:{
        type:String,
        required:true,
        validate:nameValidator
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        validate:emailValidator
    },
    password:{
        type:String,
        required:true,
        validate:passwordValidator
    },
    passwordChangedDate:{
        type:Date
    },
    passwordResetToken:{
        type:String
    }, 
    phone:{
        type:String,
        required:true,
        validate:phoneValidator
    },
    address:{
        type:String,
        required:true,
        validate:addressValidator
    },
    post:{
        type:String,
        required:true,
        validate:postValidator
    },
    gender:{
        type:String,
        enum:["male","female","others"],
        required:true
    },
    role:{
        type:String,
        enum:["employee","admin"],
        default:"employee"
    },
    active:{
        type:Boolean,
        default:true
    }
})

module.exports=mongoose.model("Employee",employeeSchema)