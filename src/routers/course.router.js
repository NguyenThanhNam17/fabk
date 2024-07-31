import express from 'express';


import courseController from '../app/controller/CoursesController.js';
const router = express.Router();

router.get('/create',courseController.create);
router.post('/store',courseController.store);
router.get('/:id/edit',courseController.edit);
router.get('/:slug', courseController.show);

export default router;
