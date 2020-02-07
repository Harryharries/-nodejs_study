var fs = require('fs');
function getFileByPath(path) {
    return new Promise(function (resolve,reject) {
        fs.readFile(path, 'utf8', function (err, data) {
            if(err){
                reject(err);   //失败
            }else{
                resolve(data);    //成功
            }
        })
    });
}

//由于then通过getFileByPath返回的是一个promise对象，所以可以继续.then串联调用（链式调用）
getFileByPath('./readme')
    .then(function(data){
        console.log("成功："+data);
        return getFileByPath('./readme');
    },function(err){
        console.log("失败："+err);
        return getFileByPath('./readme');
    })
    .then(function(data){
        console.log("成功："+data);
        return getFileByPath('./learningnotes');
    },function(err){
        console.log("失败："+err);
        return getFileByPath('./learningnotes');
    })
    .then(function(data){
        console.log("成功："+data);
    },function(err){
        console.log("失败："+err);
    });