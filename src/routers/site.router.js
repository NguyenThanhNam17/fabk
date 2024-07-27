import express from 'express';
const router = express.Router();

import siteController from '../app/controller/SiteController.js';

router.use('/search', siteController.search);
router.use('/', siteController.home);

export default router;
