const express = require('express');
const socketio = require('socket.io');
const mongoose = require('mongoose');

const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);

const url= 'mongodb+srv://davidmonzon:davidmonzon@mesosat.ykyr0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(url,options).then(
    ()=>{console.log('Conectado a mongo');},
    err=>{err}
);
app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname,'public')));

require('./sockets')(io);

server.listen(app.get('port',()=>{
    console.log('server');
}));