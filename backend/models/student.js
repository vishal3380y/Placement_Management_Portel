import mongoose from "mongoose";

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    graduationYear:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"Student"
    },
    appliedCompanies:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Company"
        }
    ]
},{timestamps:true})

export default mongoose.model('Student',studentSchema);