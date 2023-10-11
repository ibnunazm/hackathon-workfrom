import express from 'express';
import { 
    getAmenities,
    getAmenityById,
    createAmenity,
    updateAmenity,
    deleteAmenity
} from '../controllers/AmenitiesController.js';
import { adminAndOwnerOnly, verifyUser } from '../middleware/AuthUser.js';

const router = express.Router();

router.get('/amenities', verifyUser, adminAndOwnerOnly, getAmenities);
router.get('/amenities/:id', verifyUser, adminAndOwnerOnly, getAmenityById);
router.post('/amenities', verifyUser, adminAndOwnerOnly, createAmenity);
router.patch('/amenities/:id', verifyUser, adminAndOwnerOnly, updateAmenity);
router.delete('/amenities/:id', verifyUser, adminAndOwnerOnly, deleteAmenity);

export default router;
