/**
 * Created by nowz on 2/6/17.
 */
const mongoose=require("./db/connect");
const express=require("express");
const BodyParser=require("body-parser");
const {Todos}=require("./models/Todos");
const fs=require("fs");
let app=express();
app.use(BodyParser.json());
app.post("/",(req,res)=>{
 var todos=new Todos(req.body);
 todos.save().then((res_)=>{
     res.status(200).send(res_);
 }).catch((err)=>{
     res.status(400).send(err);
 })
});
app.get("/",(req,res)=>{
    Todos.find().then((todos)=>{
      res.send({todos});
    }).catch((err)=>{
        res.send(err)
    })
}
);
app.listen(3000);
module.exports.app=app;
