const express = require("express");
const route = express.Router();

route.get("/", function(req,res){
    console.log("mensajes:", req.app.locals.user);
    res.render("index.ejs", {
        titulo:"index principal"
    });
});

module.exports=route;