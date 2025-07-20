const mongo = require('mongodb')
const mongoose = require('mongoose')

// creating collection

const mongoUrl = "mongodb+srv://jogdandprachi13:prachijogdand13@web1.kxi1tj8.mongodb.net/test"

mongoose.connect(mongoUrl)

const db = mongoose.connection

db.on('error',console.error.bind(console,'Mongodb connection error'));

db.once("open",async ()=>{
    console.log("connection created");

    try{
        await db.createCollection("demo");
        console.log("collection created");
        
    } catch(err){
        console.error("error while creating colletion",err.message);
        
    }
    finally{
        mongoose.connection.close();
    }
    
});
    
