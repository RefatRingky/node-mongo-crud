const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// use middleware 
app.use(cors());
app.use(express.json());

// userName:dbuser1
// password: PsbtzuDD9HQFBHAV;



const uri = "mongodb+srv://dbuser1:PsbtzuDD9HQFBHAV@cluster0.qljca.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run(){
   try{
       await client.connect();
       const userCollection = client.db("foodExpress").collection("user");
       
       app.post('/user', (req,res) =>{
           
       })
   }

   finally{
    //    await client.close();
   }
}

run().catch(console.dir);


app.get('/',(req,res) =>{
    res.send('My CRUD server is Running');
})

app.listen(port, ()=>{
    console.log("CRUD Server is Running");
})