const Employee=require("./models/employeeModel")
const bcrypt=require("bcrypt")

exports.createSuperUser=async()=>{
    try{
        let superUser=await Employee.findOne({email:"damn@gmail.com"})
        if(!superUser){
            let safePass=await bcrypt.hash(process.env.ADMIN_PASS,10)
            console.log({safePass})
            superUser=new Employee({
                firstName:"Super",
                lastName:"User",
                email:"damn@gmail.com",
                password:safePass,
                phone:"1234567890",
                address:"Kathmandu",
                post:"Super User",
                gender:"male",
                role:"admin"
            })
            superUser=await superUser.save()
        }
        console.log("super user created")
    }catch(err){
        console.log("Error creating super User",err)
    }
}