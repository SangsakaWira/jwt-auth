const express = require("express")
const dbInit = require("./config/db")
const routers = require("./routes/")
const bodyParser = require("body-parser")
const io = require('socket.io')(http)

const app = express()
const port = process.env.PORT || 3000

// Initialize mongoDB
dbInit();

app.use(bodyParser.urlencoded({extended:false}))

// Set up all routers
app.use(routers);

io.on('connection', async function(socket) {
    socket.on('client_request', async (data) => {
        
    })
})

app.listen(port,()=>{
    console.log("Server is running")
})