const jwt=require("jsonwebtoken")

const verifyToken=async(req,res,next)=>{
    const token=req.header("x-auth-token")
    if(!token){
        return res.status(401).json({
            status:false,
            message:"No token provided"
        })
    }
    try{
        const decoded=jwt.verify(token,process.env.TOKEN_KEY)
        req.employeeId=decoded.employeeId
        next()
    }
    catch(err){
        return res.status(401).json({
            status:false,
            message:"Invalid token"
        })
    }
}


module.exports=verifyToken