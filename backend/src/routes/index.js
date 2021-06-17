import dotenv from 'dotenv';
import { Router } from 'express';
import userRoutes from './userRoute';
import newsRoutes from './newsRoute';
import commentRoutes from './commentRoute';

const router = Router();

router.use('/users', userRoutes);
router.use('/news', newsRoutes);
router.use('/comments', commentRoutes);

export default router;
