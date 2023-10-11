import express from 'express';
import {
    getProperties,
    getPropertyById,
    createProperty,
    updateProperty,
    deleteProperty
} from '../controllers/PropertyController.js';
import { adminAndOwnerOnly, ownerOnly, verifyUser } from '../middleware/AuthUser.js';

const router = express.Router();

router.get('/properties', verifyUser, getProperties);
router.get('/properties/:id', verifyUser, getPropertyById);
router.post('/properties', verifyUser, adminAndOwnerOnly, createProperty);
router.patch('/properties/:id', verifyUser, adminAndOwnerOnly, updateProperty);
router.delete('/properties/:id', verifyUser, adminAndOwnerOnly, deleteProperty);

export default router;