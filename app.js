var express = require("express"),
    routes = require("./routes"),
    http = require("http"),
    path = require("path"),
    mongo = require("mongodb"),
    mongoose = require("mongoose"),
    mongoose = mongoose.connect('mongodb://localhost/happy-pulse');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
})

var app = express();


app.set("port", process.env.PORT || 8888);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(express.favicon());
app.use(express.logger("dev"));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, "public")));

if ("development" == app.get("env")) {
  app.use(express.errorHandler());
}

app.get("/", routes.index);

http.createServer(app).listen(app.get("port"), function(){
  console.log("Server listening on port " + app.get("port"));
});
