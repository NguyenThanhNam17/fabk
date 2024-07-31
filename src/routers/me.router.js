import express from 'express';


import meController from '../app/controller/MeController.js';
const router = express.Router();


router.get('/stored/courses',meController.storedCourse);


export default router;
