import express from 'express';
import { addCompany, deleteCompany, getAllCompanies, getCompanyById, updateCompany } from '../controllers/companyController.js';
import { verifyToken } from '../middleware/auth.js';
import { isAdmin } from '../middleware/isAdmin.js';

const router= express.Router();

router.post('/',verifyToken,isAdmin,addCompany);
router.get('/',getAllCompanies);
router.get('/:id',getCompanyById);
router.put('/:id',verifyToken,isAdmin,updateCompany)
router.delete('/:id',verifyToken,isAdmin,deleteCompany)

export default router;