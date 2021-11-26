var gateway = `ws://${window.location.hostname}/ws`;
var websocket;
window.addEventListener('load', onLoad);
function initWebSocket() {
	//alert('Trying to open a WebSocket connection...');
	websocket = new WebSocket(gateway);
	websocket.onopen = onOpen;
	websocket.onclose = onClose;
	websocket.onmessage = onMessage; // <-- add this line
}

function MyMax(myarr = []) {
	let al = myarr.length;
	maximum = myarr[al - 1];
	while (al--) {
		if (myarr[al] > maximum) {
			maximum = myarr[al]
		}
	}
	return maximum;
};

function onOpen(event) {
	console.log('Connection opened');
}
function onClose(event) {
	console.log('Connection closed');
	setTimeout(initWebSocket, 2000);
}
function onMessage(e) {
	console.log('Server: ', e.data);
	if (e.data) {
		var numbers = /^[0-9]+$/;
		if (e.data.match(numbers)) {
			var nivel = parseInt(e.data);
			cambiar_color(nivel);
		} else if (e.data == "tiempo") {
			console.log("ha pasado 10 segundos");
		}
	}
}
let identificadorIntervaloDeTiempo;
function onLoad(event) {
	initWebSocket();
	identificadorIntervaloDeTiempo = setInterval('cambiar()', 1500);
}

function cambiar() {
	fetch('/obtener', {
		method: 'GET'
	}).then(res => res.json())
		.then(data => {
			cambiar_color(data);
			console.log("cambia");
		});
}

function toggle() {
	websocket.send('toggle');
}

function cambiar_color(width) {
	var valor = 1024;
	var nueva = width / valor * 100;
	var colocar = nueva + "%";
	var aviso = document.getElementById("_digito");
	var aviso2 = document.getElementById("_fase");
	aviso2.innerHTML = "";
	var _temp = parseInt(nueva);
	aviso2.textContent = _temp + "%";
	if (width > 100) {
		var nuevo_valor = width / 100;
		aviso.textContent = nuevo_valor + "m";
	} else {
		aviso.textContent = width + "cm";
	}
	if (nueva > 75) {
		document.getElementById("barra").style.background = "linear-gradient(90deg, red " + colocar + ", rgba(255,0,0,0) " + colocar + ")";
		document.getElementById("_nivel").style.backgroundColor = "red";
		aviso.style.color = "white";
	} else if (nueva > 50) {
		document.getElementById("barra").style.background = "linear-gradient(90deg, orange " + colocar + ", rgba(255,0,0,0) " + colocar + ")";
		document.getElementById("_nivel").style.backgroundColor = "orange";
		aviso.style.color = "black";
	} else if (nueva > 25) {
		document.getElementById("barra").style.background = "linear-gradient(90deg, yellow " + colocar + ", rgba(255,0,0,0) " + colocar + ")";
		document.getElementById("_nivel").style.backgroundColor = "yellow";
		aviso.style.color = "black";
	} else if (nueva >= 0) {
		document.getElementById("barra").style.background = "linear-gradient(90deg, green " + colocar + ", rgba(255,0,0,0) " + colocar + ")";
		document.getElementById("_nivel").style.backgroundColor = "green";
		aviso.style.color = "white";
	}
}