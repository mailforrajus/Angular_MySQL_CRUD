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
    //read p_id , p_name & p_cost
    var p_id = req.body.p_id;
    var p_name = req.body.p_name;
    var p_cost = req.body.p_cost;
    //update p_name & p_cost based on p_id
    connection.query("update products set p_name='"+p_name+"',p_cost="+p_cost+" where p_id="+p_id,
                        (err,result)=>{
        if(err){
            res.send({"update":"fail"});
        }else{
            res.send({"update":"success"});
        }
    });
});
//export the router
module.exports = router;