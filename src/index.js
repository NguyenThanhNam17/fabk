import express from 'express';
import { fileURLToPath } from 'url';
import path, { dirname, join } from 'path';
import {engine}  from 'express-handlebars';
import morgan from 'morgan';
const port = 3000;
const app = express();

app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());

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

//xử lý các ảnh dạng tĩnh là nó sẽ truy cập cái localhost => "public" rồi / img/ (tenanh).png
app.use(express.static(path.join(__dirname,'public')));

//định tuyến cho file home
app.get('/', (req, res) => {
  res.render('home');
});

//định tuyến cho file news
app.get('/news',(req,res)=>{
  res.render('news');
});

app.post('/search',(req,res)=>{
  console.log(req.body);
  res.send('');
});

//test cho hiện post
// app.post('/search', (req,res)=>{
//   console.log(q.body);
// })


//RENDER là một chức năng của handlebars

//test params
app.get('/search',(req,res)=>{
  //test phần query mà người dùng tìm kiếm trên url, này là xuất ra để xem 
  // console.log(req.query);
  res.render('search');
});

//phần lắng nghe để khởi động source trên web
app.listen(port, () => {
  console.log('Server is running on http://localhost:3000');
});


