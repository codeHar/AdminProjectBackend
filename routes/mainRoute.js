const express=require("express")
const { login } = require("../controllers/authController")
const { getEmployee, postEmployee } = require("../controllers/employeeController")
const verifyToken = require("../middleware/auth")
const router=express.Router()

router.get("/employee",verifyToken,getEmployee)
router.post("/employee",verifyToken,postEmployee)
router.post("/login",login)

module.exports=router