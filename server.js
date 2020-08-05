const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const connectDB = require("./config/db");
const cors = require('cors');
const bodyParser = require('body-parser');


// =======================================DEKLRATED SERVER
const app = express()
const server = http.createServer(app)
const io = socketio(server)
const PORT = process.env.PORT || 5000




//========================================Connect DB
connectDB();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
//========================================ORIGIN
app.use((req, res, next) => {
    const allowedOrigin = [
        'http://localhost:3000',
        'http://localhost:3001',
        'http://vodonesia.herokuapp.com',
        'vodonesia.id'
    ];
    res.header("Access-Control-Allow-Origin", process.env.ORIGIN || allowedOrigin);
    res.header("Access-Control-Allow-Methods", 'GET, POST, PUT, DELETE');
    res.header("Access-Control-Allow-Credentials", 'true');
    next();
});

//========================================DEFINE ROUTE
app.use("/api/auth", cors(),require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/v1/villa",require("./routes/api/villa"));
app.use("/api/v1/admin",require("./routes/api/v1/admin"));
app.use("/api/v1/order/",require("./routes/api/v1/order/order"));
app.use("/api/v1/cart/",require("./routes/api/v1/carts/cart"));
app.use("/api/v1/pay/",require("./routes/api/v1/payment/payment"));
app.use("/api/v1/statistic",require("./routes/api/v1/statistic"));


//========================================IO
const {addUser, removeUser, getUser, getUsersInRoom } =require('./users')
io.on('connection',(socket)=>{
    socket.on('join', ({name,room},callback)=>{
        const { error, user} =addUser({id:socket.id, name,room})

        if (error) return callback(error)

        socket.emit('message', {user: user.name, text:`${user.name}, welcome to the room ${user.room}`})
        socket.broadcast.to(user.room).emit('message', {user: user.name, text:`${user.name}, has joined`})
        socket.join(user.room)
        callback()
    })

    socket.on('sendMessage', (message,callback)=>{
        const user = getUser(socket.id)

        io.to(user.room).emit('message', {user: user.name, text: message})

        callback()
    })

    socket.on('disconnect',()=>{
        console.log('User had left!!')
    })
})


//========================================PRODUCTION EXPRESS
//Serve static assets in production
if (process.env.NODE_ENV === "production") {
    //Set static folder
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}
//========================================PORT
server.listen(PORT, ()=> {
    console.log(`Server Has been ${PORT}`)
})