// 1. 引入fs模块
const fs = require('fs')

// // 2. 调用方法读取文件
// fs.readFile('./resource/poem.txt',(err,data)=>{
//     // 如果失败 抛出错误
//     if (err) throw err
//     console.log(data.toString())
// })


// 3. 使用Promise封装

const p = new Promise(function(resolve,reject){
    fs.readFile('./resource/poem.qwe',(err,data)=>{
        // 如果失败 抛出错误
        if (err) {
            reject(err)
        }else{
            resolve(data)
        }
    })
})

p.then(function(value){
    console.log(value.toString())
},function(reson){
    console.error(reson)
})