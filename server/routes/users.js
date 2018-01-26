var express = require('express');
var router = express.Router();
var User = require('../model/User');
router.post('/reg',function (req,res) {
    // console.log(req.body);
    let newUser = new User(req.body);
    newUser.save().then(data=>{
        res.send('新增用户成功')
    }).catch(err=>{
        console.log(err)
    })
});
router.post('/login',function (req,res) {
    console.log(req.body)
    let username = req.body.username;
    let psw = req.body.password;
    if(username){
       User.find({username},function (err,result) {
           if(!err && result.length != 0){
              result.forEach(function (value,index) {
                if(value.password == psw){
                    res.send('登陆成功')
                }else{
                    res.send('密码错误')
                }
              })
           }else{
               res.send('账号不存在')
           }
       })
    }
});

module.exports = router;
