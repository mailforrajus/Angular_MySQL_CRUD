/* this file used to fetch the data from products table*/
//import express module
//express module used to develop the Rest API'S
var express = require("express");
//import db_connection
//db_connection return the MySQL Connection Object
var conn = require("../config/db_connection");
//get the connection object
var connection = conn.getConnection();
//connect to database
connection.connect();
//create the router instance
//router instance used to make the modules
var router = express.Router();
//create the Rest API
router.get("/",(req,res)=>{
    //query the table
    connection.query("select * from products",
                        (err,recordsArray,fields)=>{
        if(err){
            res.send("Error While Fetching the Data !");
        }else{
            res.send(recordsArray);
        }
    });
});
//export router
module.exports = router;


