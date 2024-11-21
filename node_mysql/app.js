const express= require("express")
const http = require("node:http")
const mysql = require("mysql2/promise");

const app = express()
const server = http.createServer(app)

app.use(express.json())

app.get("/",async function(req,res){
    return res.status(200).json({"message":"This is a message from the server"})
})

app.get("/friends",async function(req,res){
    let conn=await pool.getConnection();
    const [query_result] = await conn.query("Select * from students;")

    let json_response ={}
    if(query_result.length >1){
        json_response = query_result
    }
 return res.status(200).json(json_response)
})

const port = process.env.PORT || 3000
let pool

function connectDB(){
    if(!pool){
    pool = mysql.createPool({
        host:"server3.webhostmost.com",//server3.webhostmost.com
        user:"gkitrsci_remote",////gkitrsci_remote
        password:"AA1234567", //AA1234567
        database:"gkitrsci_db_lecture"//gkitrsci_db_lecture

        
    })

    console.log("Pool created")
    }
    return pool

}


function startServer(){

    try{

        connectDB()
        server.listen(port,()=>{

            console.log(`Server started on ${port}`)
        })
    }
    catch(err){
        console.log(`Error while starting server: ${err}`)
    }

}

//start the server
startServer()
