import express from 'express'
import { register,login,getAllUsers,getUserById, updateUser,deleteUser } from '../controllers/studentController.js';
import {verifyToken} from '../middleware/auth.js'
import { isAdmin } from '../middleware/isAdmin.js';
import {applyJob} from '../controllers/companyController.js'
const router=express.Router()

router.post('/register',register)
router.post('/login',login)
router.get('/getAllUser',getAllUsers)
router.get('/get/:id',getUserById)
router.put('/updateUser/:id',updateUser)
router.delete('/deleteUser/:id',verifyToken,isAdmin,deleteUser)


router.post('/apply/:companyId',verifyToken,applyJob)

export default router;