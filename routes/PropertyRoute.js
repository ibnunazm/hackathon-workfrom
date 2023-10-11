import express from 'express';
import {
    getProperties,
    getPropertyById,
    createProperty,
    updateProperty,
    deleteProperty
} from '../controllers/PropertyController.js';
import { ownerOnly, verifyUser } from '../middleware/AuthUser.js';

const router = express.Router();

router.get('/properties', verifyUser, getProperties);
router.get('/properties/:id', verifyUser, getPropertyById);
router.post('/properties', verifyUser, ownerOnly, createProperty);
router.patch('/properties/:id', verifyUser, ownerOnly, updateProperty);
router.delete('/properties/:id', verifyUser, ownerOnly, deleteProperty);

export default router;