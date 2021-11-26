const express = require('express');
const socketio = require('socket.io');
const mongoose = require('mongoose');

const http = require('http');
const path = require('path');


const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);

mongoose.connect('mongodb+srv://davidmonzon:davidmonzon@mesosat.ykyr0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.log(err));

app.set('port', process.env.PORT || 3000);


app.use(express.static(path.join(__dirname, "public")));

server.listen(app.get('port'), ()=>{
    console.log('Server en el puerto '+app.get('port'));
});