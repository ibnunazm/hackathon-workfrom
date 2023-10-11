import express from 'express';
import { 
    getFacilities,
    getFacilityById,
    createFacility,
    updateFacility,
    deleteFacility
} from '../controllers/FacilitiesController.js';
import { adminAndOwnerOnly, verifyUser } from '../middleware/AuthUser.js';

const router = express.Router();

router.get('/facilities', verifyUser, adminAndOwnerOnly, getFacilities);
router.get('/facilities/:id', verifyUser, adminAndOwnerOnly, getFacilityById);
router.post('/facilities', verifyUser, adminAndOwnerOnly, createFacility);
router.patch('/facilities/:id', verifyUser, adminAndOwnerOnly, updateFacility);
router.delete('/facilities/:id', verifyUser, adminAndOwnerOnly, deleteFacility);

export default router;
