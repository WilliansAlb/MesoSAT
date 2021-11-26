const express = require("express"),
    path = require("path"),
    app = express(),
    puerto = process.env.PORT || 3000,
    bodyParser = require('body-parser'); // Si está definido en el entorno, usarlo. Si no, el 3000
app.use(bodyParser.json());
let base;
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://davidmonzon:davidmonzon@mesosat.ykyr0.mongodb.net/Registro?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
    .then(db => {
        base = db;
        console.log("base de datos conectada");
    })
    .catch(err => console.log(err));
const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    valor: Number
});
const reg = mongoose.model('Registro', productSchema);

app.get("/insertar", (peticion, respuesta) => {
    const product = new reg({
        _id: new mongoose.Types.ObjectId(),
        valor: peticion.query.reg
    });
    if (peticion.query.reg) {
        product
            .save()
            .then(result => {
                console.log(result);
                respuesta.status(201).json({
                    message: "Handling POST requests to /insertar",
                    createdProduct: result
                });
            })
            .catch(err => {
                console.log(err);
                respuesta.status(500).json({
                    error: err
                });
            });
    } else {
        respuesta.status(500).json({
            error: "No sé que error es"
        });
    }
});

app.get("/actualizar", (peticion, respuesta) => {
    reg.findOne({
        id: 0
    })
        .then((registro) => {
            registro.valor = peticion.query.reg;
            registro
                .save()
                .then(() => {
                    respuesta.jsonp({ registro }); // enviamos la registro de vuelta
                });
        });
});

app.get("/obtener", (peticion, respuesta) => {
    reg.findOne({
        id: 0
    })
        .then((registro) => {
            respuesta.json(registro.valor);
        });
});

app.post("/insertar", (peticion, respuesta) => {
    const product = new reg({
        _id: new mongoose.Types.ObjectId(),
        valor: peticion.body.reg,
        id: 9
    });
    if (peticion.body.reg) {
        product
            .save()
            .then(result => {
                console.log(result);
                respuesta.status(201).json({
                    message: "Handling POST requests to /insertar",
                    createdProduct: result
                });
            })
            .catch(err => {
                console.log(err);
                respuesta.status(500).json({
                    error: err
                });
            });
    } else {
        respuesta.status(500).json({
            error: "No sé que error es"
        });
    }
});
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));


app.get('/', (peticion, respuesta) => {
    // Servir archivo HTML, o cualquier otro archivo
    let rutaDeArchivo = path.join(__dirname, "index.html");
    respuesta.sendFile(rutaDeArchivo);
});

app.get('/grafica', (peticion, respuesta) => {
    // Servir archivo HTML, o cualquier otro archivo
    let rutaDeArchivo = path.join(__dirname, "grafica.html");
    respuesta.sendFile(rutaDeArchivo);
});

// Una vez definidas nuestras rutas podemos iniciar el servidor
app.listen(puerto, err => {
    if (err) {
        // Aquí manejar el error
        console.error("Error escuchando: ", err);
        return;
    }
    // Si no se detuvo arriba con el return, entonces todo va bien ;)
    console.log(`Escuchando en el puerto :${puerto}`);
});