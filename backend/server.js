const express= require('express')
const app=express()

const http=require('http')
const {Server}=require('socket.io');
const cors = require("cors");
const server=http.createServer(app);
app.use(express.json())

const io=new Server(server,{
    cors:{
        methods:["GET","POST"],
    }
});
// our routes
app.get('/',(req,res)=>{
    res.send('this is mern ')
})

io.on("connection",(socket)=>{
    console.log("user connected")
})


const port=process.env.PORT||5000;
app.listen(port,()=> console.log('server is running on http://localhost:5000'))