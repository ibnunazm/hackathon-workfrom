import express from 'express';
import {
    getProperties,
    getPropertyById,
    createProperty,
    updateProperty,
    deleteProperty
} from '../controllers/PropertyController.js';
import { verifyUser } from '../middleware/AuthUser.js';

const router = express.Router();

router.get('/properties', verifyUser, getProperties);
router.get('/properties/:id', verifyUser, getPropertyById);
router.post('/properties', verifyUser, createProperty);
router.patch('/properties/:id', verifyUser, updateProperty);
router.delete('/properties/:id', verifyUser, deleteProperty);

export default router;