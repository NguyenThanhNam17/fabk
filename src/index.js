import express from 'express';
import { fileURLToPath } from 'url';
import path, { dirname, join } from 'path';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import route from './routers/index.js';
const port = 3001;
const app = express();
import db from '../src/config/db/index.js';

//connect to db
db.connect();

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//route init
route(app);

//template morgan
app.use(morgan('combined'));

//template handlebars
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');

//set tuyến đường tới folder views
app.set('views', path.join(__dirname, 'resources/views'));

//test thử xem đang ở đâu?
console.log('path: ', path.join(__dirname, 'resources/views'));

//xử lý các ảnh dạng tĩnh là nó sẽ truy cập cái localhost => "public" rồi / img/ (tenanh).png
app.use(express.static(path.join(__dirname, 'public')));

//phần lắng nghe để khởi động source trên web
app.listen(port, () => {
    console.log('Server is running on http://localhost:3001');
});
