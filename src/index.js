const express = require("express");
const mysql = require('mysql');
const PORT = process.env.PORT || 3000;
const app = express()

app.use(express.json());

const connection = mysql.createConnection({
    host: 'buhv2nxcrazbcbhexwra-mysql.services.clever-cloud.com',
    user: 'uu4r4dutxx92o6su',
    password: 'rL6xundnlmNuUGUkdYBZ',
    database: 'buhv2nxcrazbcbhexwra'
});

//Rutas
app.get('/', (req, res) => {
    res.send('Bienvenido a la API SAT')
})

app.get('/leer', (req, res) => {
    const sql = 'SELECT * FROM lectura';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Sin resultados');
        }
    });
});

app.post('/guardar', (req, res) => {
    const sql = 'INSERT INTO lectura SET ?';

    var today = new Date();
    var year = today.getFullYear();
    var mes = today.getMonth() + 1;
    var dia = today.getDate();
    var fecha = year + "-" + mes + "-" + dia;

    const lectura = {
        valor: req.body.valor,
        fecha: fecha,
        hora: today.getHours()
    };
    connection.query(sql, lectura, error => {
        if (error) throw error;
        res.send('Lectura guardada');
    });
});

app.post('/obtener', (req, res) => {
    const sql = 'SELECT * FROM lectura WHERE fecha=?';

    const lectura = req.body.fecha;

    connection.query(sql, lectura, error => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Sin resultados');
        }
    });
});

app.get('/ver/:fecha', (request, res) => {
    let select = 'SELECT * FROM lectura WHERE fecha = ?'
    connection.query(select, request.params.fecha, (error, result) => {
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Sin resultados');
        }
    })
})


//Conexion
connection.connect(error => {
    if (error) throw error;
    console.log("Conexion BD exitosa");
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto: ${PORT}`)
})