

const fs = require('fs')

function readFiles(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })

}




let pathArr = ['./resource/Sonnet_1.txt', './resource/Sonnet_12.txt', './resource/Sonnet_18.txt']


async function main() {

    let result1 = await readFiles(pathArr[0])
    let result2 = await readFiles(pathArr[1])
    let result3 = await readFiles(pathArr[2])

    console.log(result1.toString())
    console.log(result2.toString())
    console.log(result3.toString())

}

main()

// let result1 = readFiles(pathArr[0])
// let result2 = readFiles(pathArr[1])
// let result3 = readFiles(pathArr[2])

// console.log(result1.toString())
// console.log(result2.toString())
// console.log(result3.toString())