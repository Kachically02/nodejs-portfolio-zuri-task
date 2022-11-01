const fs = require('fs')
const path = require('path')

let filePath = path.join(_dirname, 'demo.txt')
fs.readFile(filePath, 'utf8', (err, _data)=>{
    console.log(err)
})