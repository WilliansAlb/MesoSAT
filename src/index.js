const express = require("express"),
    path = require("path"),
    app = express(),
    puerto = process.env.PORT || 3000; // Si está definido en el entorno, usarlo. Si no, el 3000

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

app.get('/another', (peticion, respuesta) => {
    // Podemos acceder a la petición HTTP
    let agenteDeUsuario = peticion.header("user-agent");
    respuesta.send("La ruta / solicitada con: " + agenteDeUsuario);
});

app.get('/', (peticion, respuesta) => {
    // Servir archivo HTML, o cualquier otro archivo
    let rutaDeArchivo = path.join(__dirname, "index.html");
    respuesta.sendFile(rutaDeArchivo);
});

app.get('/pagina', (peticion, respuesta) => {
    // Servir archivo HTML, o cualquier otro archivo
    let rutaDeArchivo = path.join(__dirname, "plantilla.html");
    respuesta.sendFile(rutaDeArchivo);
});

app.get('/hola', (peticion, respuesta) => {
    let mascota = {
        nombre: "Maggie",
        edad: 2,
    };
    respuesta.json(mascota);
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