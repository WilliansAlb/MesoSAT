const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
//set views
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});
app.set("port",process.env.PORT || 3000);

app.listen(app.get("port"), () => console.log('Escuchando en el puerto 3000'));