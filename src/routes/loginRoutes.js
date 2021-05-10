const express = require('express');
const loginRouter = express.Router();

function router(nav) {
    /* GET users listing. */
    loginRouter.get('/', function(req, res) {
        res.render("login");
    });
    loginRouter.post("/post", function(req, res, next) {
        res.render("index", { nav, title: "Index" });
    });
    return loginRouter;
}
module.exports = router;