import express from 'express';
import { 
    getSubcategories,  
    getSubcategoryById,
    createSubcategory,
    updateSubcategory,
    deleteSubcategory
} from '../controllers/SubcategoryController.js';
import { adminAndOwnerOnly, verifyUser } from '../middleware/AuthUser.js';

const router = express.Router();

router.get('/subcategories', verifyUser, adminAndOwnerOnly, getSubcategories);
router.get('/subcategories/:id', verifyUser, adminAndOwnerOnly, getSubcategoryById);
router.post('/subcategories', verifyUser, adminAndOwnerOnly, createSubcategory);
router.patch('/subcategories/:id', verifyUser, adminAndOwnerOnly, updateSubcategory);
router.delete('/subcategories/:id', verifyUser, adminAndOwnerOnly, deleteSubcategory);

export default router;
