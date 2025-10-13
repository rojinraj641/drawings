import express from 'express';
import newDrawings from '../controllers/newDrawings.js';

const router = express.Router();
router.route('/newDrawings').post(newDrawings);

export default router;