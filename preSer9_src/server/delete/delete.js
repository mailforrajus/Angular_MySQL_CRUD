//import express module
var express = require("express");
//import db_connection
var conn = require("../config/db_connection");
//get the connection object
var connection = conn.getConnection();
//connect to database
connection.connect();
//create the router instance
var router = express.Router();
//create the Rest API
router.post("/",(req,res)=>{
    //read p_id
    var p_id = req.body.p_id;
    //query the table
    connection.query("delete from products where p_id="+p_id,(err,result)=>{
        if(err){
            res.send({"delete":"fail"});
        }else{
            res.send({"delete":"success"});
        }
    });
});
//export the router
module.exports = router;