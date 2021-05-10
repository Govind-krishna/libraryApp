const express = require('express');
const AuthorRouter = express.Router();

function router(nav) {

    var authors = [{
            title: 'Eiichiro Oda',
            author: 'eichoro oda',
            genre: 'shounen',
            img: '',
        },
        {
            title: 'Masashi Kishimoto',
            author: 'eichoro oda',
            genre: 'shounen',
            img: '',
        },
        {
            title: 'Tite Kubo',
            author: 'eichoro oda',
            genre: 'shounen',
            img: '',
        },
    ]

    AuthorRouter.get('/', function(req, res) {
        res.render("authors", {
            nav,
            title: 'Library',
            authors


        });
    });

    AuthorRouter.get('/:id', function(req, res) {
        const id = req.params.id
        res.render('author', {
            nav,
            title: 'Library',
            author: authors[id]

        });
    });


    return AuthorRouter;
}



module.exports = router;