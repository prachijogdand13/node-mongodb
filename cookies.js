const express = require('express')
var cookieP =  require('cookie-parser')

var app = express()
app.use(cookieP())

app.get("/",(req,res)=>{
    res.send("Welcome to cookies...")
})

let user ={
    name:"jhon",
    age:21
}

// routes
app.get('/setUser',(req,res)=>{
    res.cookie("userData",user)
    res.send("cookies created successfully")
})

  
app.get('/getUser',(req,res)=>{
    res.send(req.cookies)
})

app.get('/deletecookie',(req,res)=>{
    res.clearCookie('userData')
    res.send("cookie cleared successfully")
})


app.listen(4000)