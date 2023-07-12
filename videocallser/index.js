const app = require('express')();
const server = require('http').createServer(app);
const cors = require('cors'); // for cross origin resource sharing, usefull for deployment
const { sign } = require('crypto');

const PORT = process.env.PORT || 5000;
// socket io

const io = require('socket.io')(server, {
    cors: {
        origin: '*', // allow all origins
        methods: ["GET", "POST"]
    }
});


app.use(cors());


app.get('/', (req, res) => {
    res.send('Server is running.');
});


io.on('connection', (socket)=>{
    socket.emit('me', socket.id);

    socket.on('disconnect',()=>{
        socket.broadcast.emit('callended');
    });

    // listen the calluser event, we receive the data from the frontend
    // and then we emit the calluser event to the user we want to call
    // and send the data to that user being the object, with the signal data, from and name
    socket.on("callUser", ({userToCall, signalData, from, name})=>{
        io.to(userToCall).emit("callUser",{signal:signalData, from, name});
    });

    // listen the answerCall event, we receive the data from the frontend
    // with 
    socket.on("answerCall", (data)=>{
        io.to(data.to).emit("callAccepted", data.signal);
    });
})

server.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));

