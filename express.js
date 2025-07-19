const express = require('express')

const app = express()
app.use(express.static('public'))

// app.get("/home",(req,res)=>{
//     res.send("hello world...")
// })
// app.listen(4000)

app.post("",(req,res)=>{
    res.send("hello world...")
})
app.listen(4000)