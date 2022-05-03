const express=require("express")
const { getEmployee, postEmployee } = require("../controllers/employeeController")
const router=express.Router()

router.get("/",getEmployee)
router.post("/",postEmployee)

module.exports=router