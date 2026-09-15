
import Company from "../models/company.js";
import Student from "../models/student.js";

// Add Company
export const addCompany = async (req, res) => {
    try {
        const {
            companyName,
            salaryPackage,
            role,
            location,
            description
        } = req.body;

        if (!companyName) {
            return res.status(400).json({
                success: false,
                message: "Please provide company name"
            });
        }

        if (!salaryPackage) {
            return res.status(400).json({
                success: false,
                message: "Please provide salary package"
            });
        }

        if (!role) {
            return res.status(400).json({
                success: false,
                message: "Please provide role"
            });
        }

        if (!location) {
            return res.status(400).json({
                success: false,
                message: "Please provide location"
            });
        }

        const company = await Company.create({
            companyName,
            salaryPackage,
            role,
            location,
            description
        });

        return res.status(201).json({
            success: true,
            message: "Company added successfully",
            company
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// Get All Companies
export const getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find();

        if (companies.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No companies registered"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Companies fetched successfully",
            companies,
            numberOfCompanies: companies.length
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// Get Company By ID
export const getCompanyById = async (req, res) => {
    try {
        const { id } = req.params;

        const company = await Company.findById(id);

        if (!company) {
            return res.status(404).json({
                success: false,
                message: "No company found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Company fetched successfully",
            company
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// Update Company
export const updateCompany = async (req, res) => {
    try {
        const { id } = req.params;

        const company = await Company.findOneAndUpdate(
            { _id: id },
            req.body,
            { returnDocument: "after" }
        );

        if (!company) {
            return res.status(404).json({
                success: false,
                message: "No company found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Company updated successfully",
            company
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// Delete Company
export const deleteCompany = async (req, res) => {
    try {
        const { id } = req.params;

        const company = await Company.findByIdAndDelete(id);

        if (!company) {
            return res.status(404).json({
                success: false,
                message: "No company found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Company deleted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const applyJob=async(req,res)=>{
    try{
        const {companyId}=req.params;
        const{id}=req.user // student ID
        
        //Find Student
        const student=await Student.findById(id);

        if(!student){
            return res.status(404).json({
                success:false,
                message:"No student found"
            })
        }

        //Find company
        const comapny=await Company.findById(companyId);

        if(!comapny){
            return res.status(404).json({
                success:false,
                message:"No company found"
            })
        }

        //check if student already applied
        if(student.appliedCompanies.includes(companyId)){
            return res.status(400).json({
                success:false,
                message:"Already Applied To This job...."
            })
        }

        student.appliedCompanies.push(companyId)
        comapny.appliedStudents.push(id)


        //save both
        await student.save()
        await comapny.save()

        return res.status(200).json({
            success:true,
            message:"Successfully applied to this job",
            comapny:comapny,
            student:student
        })
    }catch(error){
        return res.status(500).json({
            suceess:false,
            message:error.message
        })
    }
}
