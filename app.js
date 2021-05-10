const express = require('express');
const app = express();
const nav = [{
        link: '/books',
        name: 'Books'
    },
    {
        link: '/authors',
        name: 'Authors'
    },
    {
        link: '/admin',
        name: '/add book'
    }
];

app.use(express.urlencoded({extended:true}));
const BookRouter = require('./src/routes/bookRoutes')(nav)
const AuthorRouter = require('./src/routes/authorRoutes')(nav)
const loginRouter = require('./src/routes/loginRoutes')(nav)
const SignupRouter = require('./src/routes/signupRoutes')(nav)
const adminRouter = require('./src/routes/adminRoutes')(nav)


app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use('/books', BookRouter);
app.use('/authors', AuthorRouter);
app.use('/login', loginRouter);
app.use('/signup', SignupRouter);
app.use('/admin', adminRouter);



app.get('/', function(req, res) {
    res.render("index", {
        nav,
        title: 'Library'

    });
});



app.listen(5000);