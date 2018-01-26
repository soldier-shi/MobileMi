//第一步:引入mongoose模块
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/vue");
var db = mongoose.connection;
db.on("connected", function() {
    console.log("链接成功")
})

db.on("disconnected", function() {
    console.log("断开连接")
})


