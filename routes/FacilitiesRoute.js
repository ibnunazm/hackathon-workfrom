import express from 'express';
import { 
    getFacilities,
    getFacilityById,
    createFacility,
    updateFacility,
    deleteFacility
} from '../controllers/FacilitiesController.js';

const router = express.Router();

router.get('/facilities', getFacilities);
router.get('/facilities/:id', getFacilityById);
router.post('/facilities', createFacility);
router.patch('/facilities/:id', updateFacility);
router.delete('/facilities/:id', deleteFacility);

export default router;
