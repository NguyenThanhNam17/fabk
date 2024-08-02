import express from 'express';


import meController from '../app/controller/MeController.js';
const router = express.Router();


router.get('/stored/courses',meController.storedCourse);
router.get('/trash/courses',meController.trashCourse);


export default router;
