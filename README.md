# puredatetime
时间日期格式化工具 
只支持中文yyyy-MM-dd HH:mm:ss 第q季 格式

下载 - download<br>
	npm install puredatetime

>引用模块
```javascript
	let pureDatetime = require("puredatetime");
```

>使用示例
```javascript
    var d = new Date("2018-5-18 03:1:1:111");
    console.log(d.getTime())
    
    var dateStr = pureDateTime.formatDate(d,"yyyy-MM-dd HH:mm:ss 第q季"); //24小时，所有是H
    console.log(dateStr); //2018-05-18 03:01:01 第2季
    
    var dateObj = pureDateTime.dateObject(d);
    console.log(JSON.stringify(dateObj)) //{"M":5,"d":21,"h":11,"H":11,"m":54,"s":6,"q":2}

    

```
