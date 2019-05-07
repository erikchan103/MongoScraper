var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 3000;
var app = express();
var router = express.Router();
require("./config/routes")(router);
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
var db = process.env.MONGOD_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(db, function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("mongoose connection is successful")
    }
})
app.listen(PORT, function () {
    console.log("Listening on port:" + PORT);
});
