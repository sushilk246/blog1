var express = require('express');
var routes = express.Router();
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const Article = require('./blogmodels')
const Comment = require('./commentmodels')

routes.use(bodyParser.urlencoded({ extended: false }));

// Connecting To Database
// using online  Mongo Atlas as database
mongoose.connect('mongodb+srv://sk123:sk123@cluster0.vezj4.mongodb.net/dx?retryWrites=true&w=majority' ,{
    useNewUrlParser: true, useUnifiedTopology: true,
}).then(() => console.log("Database Connected for you--")
);




//api for home page
routes.get('/', async function(req, res) {
      let art = await Article.find();
      res.render('index', { articles: art });

});

//api for showing all post
routes.get('/showall', async function(req, res) {
      let art = await Article.find();
      res.render('showall', { articles: art });


});

//api for showing full post
routes.get('/:id', async (req, res) => {
      const art = await Article.findById(req.params.id);
      if (art == null) res.redirect('/');
      res.render('show', { article: art })
});

//api for creating new post
routes.get('/new', function(req, res) {
      res.render('new');
});

//api saving new post in database
routes.post('/new', async function(req, res) {
      let art=new Article({
                              uid:req.body.idd,
                              title:req.body.title,
                              description:req.body.description,
                              markdown:req.body.markdown,
                            });
      try
       {
         article=await art.save();
         res.redirect('/');
       }
      catch (e)
      {
        res.render( 'new');
      }
});

//api for search
routes.post('/search', async function(req, res) {
      const art=await Article.findOne({uid:req.body.idd});

      if (art == null) res.render('notfindblog');
      res.render('show', { article: art })
});

//api for delete operation
routes.post('/delete', async function(req, res) {

      const art=await Article.findOneAndDelete({uid:req.body.idd});

      if (art == null) res.render('successfullydeletednot');
      res.render('successfullydeleted')
});

//api for update operation
routes.post('/update', async function(req, res) {

      const art = await Article.findOne({uid:req.body.idd});
      if (art == null) res.render('notfindblog');
      res.render('edit', { article: art })
});


// api for update
routes.put('/:id',async function(req,res){
      let art=await Article.findById(req.params.id);
      art.uid=req.body.idd;
      art.title=req.body.title;
      art.description=req.body.description;
      art.markdown=req.body.markdown;

      try
       {
         art=await art.save();
         res.redirect('/');
       }
      catch (e)
      {
        res.redirect('/');
      }
});

//api for adding comment
routes.post('/addcomment', async function(req, res) {

      //const art = await Article.findOne({uid:req.body.idd});
      //if (art == null) res.render('notfindblog');
      //res.render('edit', { article: art })
      res.render('addcomment', { uid: req.body.idd })
});

//api for saving newcomment in database
routes.post('/savecomment', async function(req, res) {
      let art=new Comment({
                              uid:req.body.idd,
                              content:req.body.value,
                            });
      try
       {
         article=await art.save();
         res.redirect('/');
       }
      catch (e)
      {
        res.render( 'new');
      }
});

//api for fetching all comment from database
routes.post('/allcomment', async function(req, res) {
      //var =req.body.idd;
      const art = await Comment.find( {uid:req.body.idd} );

      res.render('showallcomment', { comments: art });


});
///



module.exports = routes;
