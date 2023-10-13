import express from 'express';
import { 
    getReviews,
    getReviewById,
    createReview,
    updateReview,
    deleteReview
} from '../controllers/ReviewsController.js';

const router = express.Router();

router.get('/reviews', getReviews);
router.get('/reviews/:id', getReviewById);
router.post('/reviews', createReview);
router.patch('/reviews/:id', updateReview);
router.delete('/reviews/:id', deleteReview);

export default router;