import express from 'express';

import newsController from '../app/controller/NewsController.js';
const router = express.Router();

router.get('/detail', newsController.detail);
router.get('/:slug', newsController.index);

export default router;
