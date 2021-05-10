const express = require('express');
const BookRouter = express.Router();
const BookData = require('../model/BookData');

function router(nav) {

    // var books = [{
    //         title: 'one peice',
    //         author: 'Eiichiro Oda',
    //         genre: 'shounen',
    //         img: '',
    //     },
    //     {
    //         title: 'naruto',
    //         author: 'Masashi Kishimoto',
    //         genre: 'shounen',
    //         img: '',
    //     },
    //     {
    //         title: 'bleach',
    //         author: 'Tite Kubo',
    //         genre: 'shounen',
    //         img: '',
    //     },
    // ]

    BookRouter.get('/', function(req, res) {
        BookData.find()
        .then(function(books){
            res.render("books", {
                nav,
                title: 'Library',
                books

        });
        
        });
    });

    BookRouter.get('/:id', function(req, res) {
        const id = req.params.id;
        BookData.findOne({_id: id})
        res.render('book', {
            nav,
            title: 'Library',
            book

        });
    });


    return BookRouter;
}



module.exports = router;