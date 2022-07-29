//---- Requirements
// These are all the components we will need to run our server
const express = require('express')
const { Db } = require('mongodb')
const app = express()
const MongoClient=require('mongodb').MongoClient
const PORT = 8001
require('dotenv').config()


//---- Database connection
// This creates the db container
let db,
    // This sets up the connection for our database so it can communicate with our server
    dbConnectionStr=process.env.DB_STRING,
    // sets dbName to todo
    dbName='todo'

// This is makes the connection to our database
MongoClient.connect(dbConnectionStr, {useUnifiedTopology:true})
    .then(client=>{
        console.log(`Connected to ${dbName} Database`)
        db=client.db(dbName)
    })

//---- Modules
// Allows us to use ESJ
app.set('view engine', 'ejs')
// Allows us to access the public folder
app.use(express.static('public'))
// Converts ....
app.use(express.urlencoded({extended:true}))
// Converts JSON files
app.use(express.json())


//---- Routes
    //---- Receive (Pulls in data from our database)
    app.get('/', async (request,response)=>{
        //  Finds all items in our todo list and places them into an array
        const todoItems=await db.collection('todos').find().toArray()
        // Finds todos that are not complete and tells us how many are left
        const itemsLeft=await db.collection('todos').countDocuments({completed: false})
        // Sends the the above information over to EJS where they are rendered for us
        response.render('index.ejs', {items: todoItems, left: itemsLeft})
    })

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