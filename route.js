const express = require('express').Router()
const route = require('express').Router()
const userModule = require("./module")


route.post("/register", async(req, res)=>{
    const newUser = new userModule({

        name : req.body.name,
        email : req.body.email,
        mobile : req.body.mobile,

    })

    try{
        const saveData = await newUser.save()
        res.send(saveData)
    }catch(error){
        console.log(error);
        
    }
})

// to access the data
route.get('/showdata',async(req,res)=>{
    try{
         const showdata= await userModule.find()
         res.send(showdata)
    }catch(error){
        console.log(error);
        
    }
})

// to access only one data
route.get('/showone', async (req,res)=> {

    let id=req.query.id

    try {
         
        const showone = await userModule.findById(id)
        res.send(showone)

    } catch (error) {
        console.log(error);
        
    }
})

// to delete the data
route.delete('/delete',async (req,res)=>{
        
    let id=req.query.id

    try {
        
        const deletedata = await userModule.findByIdAndDelete(id)
        res.send("data deleted successfully")

    } catch (error) {
        console.log(error);
        
    }
})

route.put('/update',async (req,res) => {

    let _id = req.body._id
    try {
        const updatedata = await userModule.findByIdAndUpdate(_id,req.body)
        res.send ("data updated successfully")
    } catch (error) {
        console.log(error);
        
    }
    
})

module.exports = route;