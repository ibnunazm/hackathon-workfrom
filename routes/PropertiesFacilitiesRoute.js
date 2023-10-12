import express from 'express';
import { 
    getPropertiesFacilities,
    getPropertiesFacilitiesById,
    createPropertiesFacilities,
    updatePropertiesFacilities,
    deletePropertiesFacilities
} from '../controllers/PropertiesFacilitiesController.js';

const router = express.Router();

router.get('/propertiesfacilities', getPropertiesFacilities);
router.get('/propertiesfacilities/:id', getPropertiesFacilitiesById);
router.post('/propertiesfacilities', createPropertiesFacilities);
router.patch('/propertiesfacilities/:id', updatePropertiesFacilities);
router.delete('/propertiesfacilities/:id', deletePropertiesFacilities);

export default router;
