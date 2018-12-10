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
    //read p_id,p_name & p_cost
    //"body" is the predefined key in req object
    //"body" key used to read the post parameters
    var p_id = req.body.p_id;
    var p_name = req.body.p_name;
    var p_cost = req.body.p_cost;
    //insert p_id , p_name & p_cost in products table
    connection.query("insert into products values("+p_id+",'"+p_name+"',"+p_cost+")",
                                (err,result)=>{
        if(err){
            res.send({"insert":"fail"});
        }else{
            res.send({"insert":"success"});
        }
    });
});
//export the router
module.exports = router;