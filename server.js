const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const methodOverride = require('method-override')



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(methodOverride('_method'))

app.get('/',routes);

app.get('/showall',routes);

app.get('/new',routes);

app.post('/new',routes);
app.post('/search',routes);
app.post('/delete',routes);
app.post('/update',routes);
app.post('/addcomment',routes);
app.post('/savecomment',routes);
app.post('/allcomment',routes);

app.get('/:id',routes);


app.put('/:id',routes);






app.listen(4000, function() {  console.log(':Server is running at port 4000')});
