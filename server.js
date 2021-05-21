const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const methodOverride = require('method-override')



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(methodOverride('_method'))


app.get('/',routes);//api for home page

app.get('/showall',routes);//api for to get all post

app.get('/new',routes);//api for add new post

app.post('/new',routes);//api for saving new post in database

app.post('/search',routes);//api for search post by id

app.post('/delete',routes);//api for delete post by id

app.post('/update',routes);//api for update post by id

app.post('/addcomment',routes);//api for add comments on post by id

app.post('/savecomment',routes);// api for saving comment in database

app.post('/allcomment',routes);//api for fetch all comment on particular post by id

app.get('/:id',routes);//api for showing full post


app.put('/:id',routes);//api for updating post






app.listen(4000, function() {  console.log(':Server is running at port 4000')});
