import express from 'express';
import { 
    getSubcategories,  
    getSubcategoryById,
    createSubcategory,
    updateSubcategory,
    deleteSubcategory
} from '../controllers/SubcategoryController.js';

const router = express.Router();

router.get('/subcategories', getSubcategories);
router.get('/subcategories/:id', getSubcategoryById);
router.post('/subcategories', createSubcategory);
router.patch('/subcategories/:id', updateSubcategory);
router.delete('/subcategories/:id', deleteSubcategory);

export default router;
