const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
    host: "mysql-service",
    user: "root",
    password: "password",
    database: "company"
});

app.get("/", (req,res)=>{
    res.send("Backend Running");
});

app.get("/employees",(req,res)=>{

    db.query("SELECT * FROM employee",(err,result)=>{

        if(err){
            res.send(err);
        }else{
            res.json(result);
        }

    });

});

app.listen(3000,()=>{
    console.log("Server Started");
});
