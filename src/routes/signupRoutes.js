const express = require('express');
const SignupRouter = express.Router();

function router(nav) {
    SignupRouter.get('/', function(req, res) {
        res.render("signup");
    });
    SignupRouter.post("/post", function(req, res, next) {
        res.render('index', { nav, title: "Index" });
    });
    return SignupRouter;
}
module.exports = router;