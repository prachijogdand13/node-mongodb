const { log } = require('console');
const fs = require('fs')
const http = require('http')

http.createServer((req,res)=>{
    // fs.readFile('index.html',(err,data)=>{
    //       res.writeHead(200,{'content-type': 'text/html'})
    //       res.write(data)
    //       res.end()
    // })

    // console.log("server is started");
    // fs.appendFile("inde.html","hello",(err)=>{
    //     if(err)throw err
    //     console.log("file is updated");
    // })

    console.log("server is started");
    // fs.unlink("inde.html" , (err)=>{
    //     if(err)throw err
    //     console.log("file is updated");
    // })
    fs.open('index.js','w',(err)=>{
        fs.readFile('index.js',(err,data)=>{
            res.writeHead(200,{'Content-Type': 'text/plain'})
            res.write(data)
            res.end()

            if(err) throw err
            console.log(err);
        })
           
       })
})
.listen(5000)