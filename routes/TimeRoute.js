import express from 'express';
import {
    getTime,
    getTimeById,
    createTime,
    updateTime,
    deleteTime
} from '../controllers/TimeController.js';

const router = express.Router();

router.get('/times', getTime);
router.get('/times/:id', getTimeById);
router.post('/times', createTime);
router.patch('/times/:id', updateTime);
router.delete('/times/:id', deleteTime);

export default router;