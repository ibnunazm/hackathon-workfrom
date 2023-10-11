import express from 'express';
import {
    Login,
    getUserLogin,
    Logout
} from '../controllers/AuthController.js';

const router = express.Router();

router.get('/me', getUserLogin);
router.post('/login', Login);
router.delete('/logout', Logout);

export default router;