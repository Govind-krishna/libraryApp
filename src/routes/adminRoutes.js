const express = require('express');
const adminRouter = express.Router();
const BookData = require('../model/BookData');

function router(nav) {
    adminRouter.get('/', function(req, res) {
        res.render('addbook',{
            nav,
            title: 'Library'
        })
    })

    adminRouter.post('/add', function(req,res){
        var item= {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image
        }

       var book = BookData(item);
       book.save();
       res.redirect('/books')
        
    });


    return adminRouter;
}
module.exports = router;