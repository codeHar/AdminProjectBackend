const mongoose=require("mongoose")
const Schema=mongoose.Schema

const attendanceSchema=new Schema({
    employeeId:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"Employee"
    },
    date:{
        type:Date,
        default:Date.now
    },
    status:{
        type:Boolean,
        default:false
    }
})


module.exports=mongoose.model("Attendance",attendanceSchema)