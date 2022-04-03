
const fs = require('fs')

// fs.readFile('./resource/Sonnet_12.txt',(err1,data1)=>{
//     fs.readFile('./resource/Sonnet_18.txt',(err2,data2)=>{
//         let result = data1 + '\n\n======================\n\n' + data2
//         console.log(result)
//     })
// })



const p = new Promise((resolve, reject) => {
    fs.readFile('./resource/Sonnet_1.txt', (err, data) => {
        resolve(data)
        
    })
})
p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./resource/Sonnet_12.txt', (err, data) => {
            resolve([value, data])
            
        })
    })
}).then(value => {
    
    return new Promise((resolve, reject) => {
        fs.readFile('./resource/Sonnet_18.txt', (err, data) => {
            value.push(data)
            resolve(value)
        })
    })
}).then(value => {
    console.log(value.join('\n\n=============================\n\n'))
})























