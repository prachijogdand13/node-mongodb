const fs = require('fs')

// fs.writeFile('msg.txt',"good afternoon",(err)=>{
//     if(err) throw err
//     console.log("File updated");
    
// })    previs data remove when new data is added

// in append previs data not remove when new data is added
// fs.appendFile('msg.txt',"hello",(err)=>{
//     if(err) throw err
//     console.log("File updated");
    
// })

fs.open("index.js",'w',(err,file)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("file is opened in read mode");

    fs.appendFile(file,"hello",(err,data)=>{
        if(err){
            console.log(err);
            
        }
        console.log(data);
        
    })
    
//   fs.writeFile('index.html','good',(err,data)=>{
//     if(err){
//         console.error(err);
        
//     }
//     console.log(data);
    
//   })


})