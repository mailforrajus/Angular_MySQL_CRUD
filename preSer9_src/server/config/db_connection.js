/**** This file used to create the MySQL Connection Object*****/
//import mysql module
var mysql = require("mysql");
//import db_proprties
var prop = require("./db_properties");
//export JSON Object
module.exports = {
    getConnection   :   ()=>{
        return mysql.createConnection(prop);
    }
};