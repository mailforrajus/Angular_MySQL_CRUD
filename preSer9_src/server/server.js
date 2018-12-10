//import express module
var express = require("express");
//import body-parser module
//body-parser module used to read the post parameters
var bodyparser = require("body-parser");
//import cors module
//cors used to enable the CORS
var cors = require("cors");
//create the Rest Object
var app = express(); //where "app" object used to develop the Rest API
//use cors
app.use(cors());
//set the JSON As MIME Type
app.use(bodyparser.json());
//take the permission to read post parameters
app.use(bodyparser.urlencoded({extended:false}));
//import fetch module
var fetch = require("./fetch/fetch");
//use fetch module
app.use("/fetch",fetch);
//import insert module
var insert = require("./insert/insert");
//use insert module
app.use("/insert",insert);
//import update module
var update = require("./update/update");
//use update module
app.use("/update",update);
//import delete module
var remove = require("./delete/delete");
//use remove module
app.use("/delete",remove);
//assign the port no
app.listen(8080);
console.log("Server Listening the port no.8080");