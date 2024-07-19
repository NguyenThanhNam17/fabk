import express from 'express';
import { fileURLToPath } from 'url';
import path, { dirname, join } from 'path';
import {engine}  from 'express-handlebars';
import morgan from 'morgan';
const port = 3000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//template morgan
app.use(morgan('combined'));  

//template handlebars
app.engine('hbs', engine({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');

//set tuyến đường tới folder views
app.set('views', path.join(__dirname,'resources/views'));

//test thử xem đang ở đâu?
console.log('path: ',path.join(__dirname,'resources/views'));

//định tuyến cho file home
app.get('/', (req, res) => {
  res.render('home');
});

//định tuyến cho file news
app.get('/news',(req,res)=>{
  res.render('news');
});



//phần lắng nghe để khởi động source trên web
app.listen(port, () => {
  console.log('Server is running on http://localhost:3000');
});


