function analyzeDateObj(dateObj){
    if(Object.prototype.toString(dateObj) !=="[object Date]"){
        if(!isNaN(dateObj)){ //毫秒格式如：1526583661111
            dateObj=new Date(Number(dateObj))
        }
        else{
            var regLong=/(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})/
            var regShort=/(\d{4})-(\d{1,2})-(\d{1,2})/
            var arr=regLong.exec(dateStr)
            if(!arr){
                arr=regShort.exec(dateStr)
            }
            if(arr){
                arr.shift()
                dateObj=arr.length===3?new Date(arr[0],arr[1],arr[2]):new Date(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5])
            }
            else{
                dateObj=null;
            }
        }
    }
    return dateObj
}

//根据日期或者日期字符串返回指定格式的日期字符串,异常返回null
function formatDate(dateObj,format) {  
    var dateObj=analyzeDateObj(dateObj)
    if(!dateObj){
        console.log("日期格式解析失败")
        return null;
    }
	var o = {   
		"M+": dateObj.getMonth() + 1, //月份   
		"d+": dateObj.getDate(), //日   
		"h+": dateObj.getHours() % 12 == 0 ? 12 : dateObj.getHours() % 12, //小时
		"H+": dateObj.getHours(), //小时   
		"m+": dateObj.getMinutes(), //分   
		"s+": dateObj.getSeconds(), //秒   
		"q+": Math.ceil((dateObj.getMonth() + 1) / 3) //季度 
	};
    if(/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, dateObj.getFullYear());
    }
	for(var k in o) {   
		if(new RegExp("(" + k + ")").test(format)) {   
			format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(o[k].toString().length)));   
		}  
	}  
	return format;
};


//根据日期或者日期字符串返回日期所有特性,异常返回null
function dateObject(dateObj) {
    var dateObj=null;
    if(dateObj){
        dateObj=analyzeDateObj(dateObj)
    }
    else{
        dateObj=new Date()
    }
    if(!dateObj){
        console.log("日期格式解析失败")
        return null;
    }
    var o = {
        "M": dateObj.getMonth() + 1, //月份  
        "d": dateObj.getDate(), //日  
        "h": dateObj.getHours() % 12 == 0 ? 12 : dateObj.getHours() % 12, //小时
        "H": dateObj.getHours(), //小时  
        "m": dateObj.getMinutes(), //分  
        "s": dateObj.getSeconds(), //秒  
        "q": Math.ceil((dateObj.getMonth() + 1) / 3) //季度 
    };
    return o;
};

module.exports ={
    formatDate:formatDate,
    dateObject:dateObject
};