import express from 'express';
import { 
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory 
} from '../controllers/CategoryController.js';
import { adminAndOwnerOnly, verifyUser } from '../middleware/AuthUser.js';

const router = express.Router();

router.get('/categories', verifyUser, adminAndOwnerOnly,  getCategories);
router.get('/categories/:id', verifyUser, adminAndOwnerOnly, getCategoryById);
router.post('/categories', verifyUser, adminAndOwnerOnly, createCategory);
router.patch('/categories/:id', verifyUser, adminAndOwnerOnly, updateCategory);
router.delete('/categories/:id', verifyUser, adminAndOwnerOnly, deleteCategory);

export default router;
