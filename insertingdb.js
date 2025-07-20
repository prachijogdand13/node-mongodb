const{MongoClient, Long} = require('mongodb')

const url = "mongodb+srv://jogdandprachi13:prachijogdand13@web1.kxi1tj8.mongodb.net/test"

const client = new MongoClient(url)

async function run(){
    try{
        await client.connect()

        const db = client.db()

        // this is for insert one
        // const myobj ={_id:155,name:"harry",address:"mumbai",age:20}

        // const result = await db.collection('data').insertOne(myobj)

        // this is for insert many
        // const myobj =[{name:"max", address:"mumbai",age:28},{name:"bob", address:"pune",age:18},{name:"prince", address:"latur",age:23}]

        // const result = await db.collection('data').insertMany(myobj)
        
     // console.log("data added successfully");
        // console.log(result);


        // const result = await db.collection('data').find({}).toArray()

        // const result = await db.collection('data').findOne({})

        // console.log(result);
        // console.log(result._id);
        
        // using query
        // var query = {"name":"jhon"}
        // const result = await db.collection('data').find(query).toArray()
        // console.log(result);

        // regular expression
        // var query = {"name":/^j/i}
        // const result = await db.collection('data').find(query).toArray()
        // console.log(result);

        // sorting
        // assending
        // var query = {age:1}

        // desending
        // var query = {age:-1}
        // const result = await db.collection('data').find().sort(query).toArray()
        // console.log(result);

        // delete operation
        //  var query = {age:18}
        // const result = await db.collection('data').deleteOne(query)
        // const result = await db.collection('data').deleteMany(query)
        // console.log(result);

        // update operation
        // var query = {name:"harry"}
        // var data = {$set:{name:"smith"}}
        // const result = await db.collection('data').updateOne(query,data)
        // const result = await db.collection('data').updateMany(query,data)
        // console.log(result);

        // to find perticular no of data
        // const result = await db.collection('data').find({}).limit(3).toArray()
        // console.log(result);

        // to drop a collection
        //  const result = await db.collection('data').find({}).drop()
        // console.log(result);

        
        
    }catch(error){
        
        console.error(error);
        
    }

    finally{
        client.close()
    }
}

run()