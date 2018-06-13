var pureDateTime = require("./index.js");

var d = new Date("2018-5-18 03:1:1:111");
console.log(d.getTime())

var dateStr = pureDateTime.formatDate(d,"yyyy-MM-dd HH:mm:ss 第q季"); //24小时，所有是H
console.log(dateStr); //2018-05-18 03:01:01 第2季 测试hook
console.log("修改了2")

var dateObj = pureDateTime.dateObject(d);
console.log(JSON.stringify(dateObj)) //{"M":5,"d":21,"h":11,"H":11,"m":54,"s":6,"q":2}



