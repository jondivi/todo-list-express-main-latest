//---- Requirements
const express = require('express')
const { Db } = require('mongodb')
const app = express()
const MongoClient=require('mongodb').MongoClient
const PORT = 8001
require('dotenv').config()


//---- Database connection
let db,
    dbConnectionStr=process.env.DB_STRING,
    dbName='todo'

MongoClient.connect(dbConnectionStr, {useUnifiedTopology:true})
    .then(client=>{
        console.log(`Connected to ${dbName} Database`)
        db=client.db(dbName)
    })

//---- Modules
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//---- Routes
    //---- Receive (Pulls in data from our database)
    app.get

    //---- Create (Adds something to our database)
    app.post


    //---- Update (updates something in our database)
    app.put


    app.put


    //---- Delete (deletes something from our database)
    app.delete


//---- Port Listener
app.listen(PORT, ()=>{
    console.log(`The todo-list server is running on port ${PORT}`)
})