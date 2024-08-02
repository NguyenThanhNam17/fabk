import express from 'express';


import courseController from '../app/controller/CoursesController.js';
const router = express.Router();

router.get('/create',courseController.create);
router.post('/store',courseController.store);
router.get('/:id/edit',courseController.edit);
router.put('/:id',courseController.update);
router.patch('/:id/restore',courseController.restore);
router.delete('/:id',courseController.delete);
router.delete('/:id/force',courseController.forceDelete);
router.get('/:slug', courseController.show);

export default router;
