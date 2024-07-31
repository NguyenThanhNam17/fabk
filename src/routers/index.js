import newsRouter from './news.router.js';
import siteRouter from './site.router.js';
import courseRouter from './course.router.js';
import meRouter from './me.router.js';

function route(app) {
    app.use('/me',meRouter);
    app.use('/news', newsRouter);
    app.use('/courses',courseRouter);
    app.use('/', siteRouter);
}

export default route;
