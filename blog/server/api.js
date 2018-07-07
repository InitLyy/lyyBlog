"use strict";
const db = require("./db");
const express = require("express");
const router = express.Router();



router.post('/api/saveArticle',(req,res)=>{
    let newData = new db.Article(req.body.artcileInformation);
    console.log(req.body.artcileInformation);
    console.log(newData);
    newData.save(function(err){
        if(err){
            res.send(err);
        }else{
            console.log("保存陈宫");
            res.send({'status':1,'msg':'保存成功'});
        }
    });
});


router.post('/api/articlesList',(req,res)=>{
    db.Article.find({},(err,data)=>{
        if(err){
            res.send(err);
            return
        }
        res.send(data);
    });
});



router.post('/api/deleteBlog',(req,res)=>{
    let id = req.body.blogId;
    db.Article.remove({_id:id},(err)=>{
        if(err){
            res.send(err);
            return
        }
        console.log("删除成功")
        res.send({'status':1,"msg":"删除成功"});
    })
})

module.exports = router;
