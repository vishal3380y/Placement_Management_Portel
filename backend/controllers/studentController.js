import Student from "../models/student.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const emailRegex=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#])[A-Za-z\d@$!%*?&^#]{8,20}$/

export const register=async(req,res)=>{
    
     try{
    const{name,email,password,department,graduationYear,role,adminCode}=req.body;

    if(!name){
        return res.status(400).json({
            success:false,
            message:"Please Provide name"
        })
    }

    if(!email){
        return res.status(400).json({
            success:false,
            message:"Please provide email"
        })
    }
    
    if(!emailRegex.test(email)){
        return res.status(400).json({
            success:false,
            message:"Invalid Email"
        })
    }
    
    if(!password){
        return res.status(400).json({
            success:false,
            message:"Please provide password"
        })
    }

    if(!passwordRegex.test(password)){
        return res.status(400).json({
            success:false,
            message:
            `
             Password must contail all these parameter:

            Contains at least one lowercase letter
            Contains at least one uppercase letter
            Contains at least one digit
            Contains at least one special character
            Is between 8 and 20 characters long
            `
        })
    }
    
    if (role === "admin" && (adminCode || "").trim().toUpperCase() !== (process.env.ADMIN_CODE || "PLACEMENT2026").trim().toUpperCase()) {
        return res.status(403).json({
            success: false,
            message: "Invalid admin registration code"
        })
    }

    const existStudent=await Student.findOne({email})

    if(existStudent){
        return res.status(400).json({
            success:false,
            message:"User already registered you can directly login"
        })
    }

    let hashedPassword=await bcrypt.hash(password,10);

    const student=await Student.create({
        name,
        email,
        password:hashedPassword,
        department: role === "student" ? department : "Admin",
        graduationYear: role === "student" ? graduationYear : "N/A",
        role
    })

        return res.status(201).json({
            success:true,
            message:"User Registered Successfully",
            student:student
        })
    
    }catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

export const login=async(req,res)=>{
    try{
       const{email,password}=req.body
       if(!email){
        return res.status(400).json({
            success:false,
            message:"Please Provide email"
        })
       }
       if(!password){
        return res.status(400).json({
            success:false,
            message:"Please Provide password"
        })
       }

       if(!emailRegex.test(email)){
           return res.status(400).json({
            success:false,
            message:"invalid email"
        })
       }

       if(!passwordRegex.test(password)){
           return res.status(400).json({
            success:false,
            message:`
             Password must contail all these parameter:

            Contains at least one lowercase letter
            Contains at least one uppercase letter
            Contains at least one digit
            Contains at least one special character
            Is between 8 and 20 characters long
            `
        })
       }

       let existStudent=await Student.findOne({email}).populate("appliedCompanies")
       
       if(!existStudent){
        return res.status(404).json({
            success:false,
            message:"Student Not Register."
        })
       }

       let comparedPassword=await bcrypt.compare(password,existStudent.password)

       if(!comparedPassword){
        return res.status(400).json({
            success:false,
            message:"Incorrect Password"
        })
       }

       //Generating a token
       let payload={
         email:email,
         id:existStudent._id
       }
       const token=await jwt.sign(payload,"this is a secret key",{expiresIn:"2d"})


       const student = existStudent.toObject();
       delete student.password;
       return res.status(200).json({
          success:true,
          message:"Logged in successfully",
          token:token,
          student:student
       })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

export const getAllUsers=async(req,res)=>{
    try{
      const students=await Student.find();
      
      if(students.length==0){
         return res.status(404).json({
            success:false,
            message:"No student Registered Yet...."
         })
      }
      return res.status(200).json({
        success:true,
        message:"Fetched all students",
        students:students
      })

    }catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

export const getUserById=async(req,res)=>{
    try{
        const{id}=req.params
        const student=await Student.findById(id);
        if(!student){
            return res.status(404).json({
            success:false,
            message:"No student Registered Yet...."
         })
        }

        return res.status(200).json({
            success:true,
            message:"Student received successfully",
            student:student
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

export const updateUser=async(req,res)=>{
     try{
        const{id}=req.params
        const{name,role,course,password}=req.body

        const student=await Student.findByIdAndUpdate(id,req.body,{new:true})

        if(!student){
            return res.status(400).json({
                success:false,
                message:"No user Found!"
            })
        }

        return res.status(200).json({
            success:true,
            messag:"Student updated successfully",
            student:student
        })

     }catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        })
     }
}

export const deleteUser=async(req,res)=>{
    try{
     const{id}=req.params

     const student=await Student.findByIdAndDelete(id);

     if(!student){
        return res.status(400).json({
            success:false,
            message:"no user found"
        })
     }

     return res.status(200).json({
        success:true,
        message:"Student record deleted successfylly"
     })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}



//find()->array of objects, [],finds all the documents in the collections
//findOne()-> objects,null,find first match condition document
//create()-> use to save/send the data to the db
//findById-> use to retreive data from the collection/db by just giving document's id
//findByIdAndUpdate()-> its used to update data in the db