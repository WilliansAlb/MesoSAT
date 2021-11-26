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

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
//set views
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

server.listen(app.get('port'), ()=>{
    console.log('Server en el puerto '+app.get('port'));
});