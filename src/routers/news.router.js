import express from 'express';

import newsController from '../app/controller/NewsController.js';
const router = express.Router();

router.use('/detail',newsController.detail);
router.use('/',newsController.index);


export default router; 
