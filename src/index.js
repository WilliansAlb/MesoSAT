const express = require("express"),
    path = require("path"),
    app = express(),
    puerto = process.env.PORT || 3000; // Si está definido en el entorno, usarlo. Si no, el 3000
const router = express.Router();


app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

app.get('/', (peticion, respuesta) => {
    // Servir archivo HTML, o cualquier otro archivo
    let rutaDeArchivo = path.join(__dirname, "index.html");
    respuesta.sendFile(rutaDeArchivo);
});

router.get('/prueba',(peticion,respuesta) =>{
    respuesta.send("prueba 1");
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