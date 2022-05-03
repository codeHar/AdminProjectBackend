const express=require("express")
const mango=require("mongoose")
require("dotenv").config()
const app=express()
const cors=require("cors")
const { createSuperUser } = require("./superUser")

//connecting to database
mango.connect(process.env.MANGOURL,{useNewUrlParser:true,useUnifiedTopology:true})
.then((res)=>{
    console.log("connected to mango db")
    createSuperUser()
})
.catch((err)=>console.log(err))

const mainRoute=require("./routes/mainRoute")


app.use(express.json())
app.use(cors())

app.use("/",mainRoute)

app.listen(process.env.PORT || 4120,()=>{

    console.log("server is running on port: ",process.env.PORT)
})