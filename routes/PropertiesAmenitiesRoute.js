import express from 'express';
import { 
    getPropertiesAmenities,
    getPropertiesAmenitiesById,
    createPropertiesAmenities,
    updatePropertiesAmenities,
    deletePropertiesAmenities
} from '../controllers/PropertiesAmenitiesController.js';

const router = express.Router();

router.get('/propertiesaminities', getPropertiesAmenities);
router.get('/propertiesaminities/:id', getPropertiesAmenitiesById);
router.post('/propertiesaminities', createPropertiesAmenities);
router.patch('/propertiesaminities/:id', updatePropertiesAmenities);
router.delete('/propertiesaminities/:id', deletePropertiesAmenities);


export default router;
