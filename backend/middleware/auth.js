
import jwt from "jsonwebtoken"

export const verifyToken=async(req,res,next)=>{
    try{
        const authToken=req.headers.authorization;

        if(!authToken){
            return res.status(400).json({
                success:false,
                message:"token not provided"
            })
        }

        let token=authToken.split(" ")[1]
        
        let decodedToken=await jwt.verify(token,"this is a secret key");
        req.user=decodedToken
        console.log(decodedToken);
        next()

    }catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}