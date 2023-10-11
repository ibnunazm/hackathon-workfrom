import express from 'express';
import {
    getUsers,
    getAllOwners,
    getAllCustomers,
    getUserById,
    createUser,
    createOwner,
    createCustomer,
    updateUser,
    deleteUser
} from '../controllers/UserController.js';
import { verifyUser, adminOnly } from '../middleware/AuthUser.js';

const router = express.Router();

router.get('/users', getUsers);
router.get('/owners', getAllOwners);
router.get('/customers', getAllCustomers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.post('/owners', createOwner);
router.post('/customers', createCustomer);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router