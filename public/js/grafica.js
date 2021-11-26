
let ctx = document.getElementById('myChart').getContext('2d');
let myLabels = ['0 am', '1 am', '2 am', '3 am', '4 am', '5 am',
'6 am', '7 am', '8 am', '9 am', '10 am', '11 am',
'12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm',
'6 pm', '7 pm', '8 pm', '9 pm', '10 pm', '11 pm'];

let myBackgroundColor = [
    'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)',
    'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)',
    'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)',
    'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)'
];

let myBorderColor = [
    'rgba(255, 99, 132, 1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)',
    'rgba(255, 99, 132, 1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)',
    'rgba(255, 99, 132, 1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)',
    'rgba(255, 99, 132, 1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)'
]

let myData = [12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3,];


let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: myLabels,
        datasets: [{
            label: 'Medidas',
            data: myData,
            backgroundColor: myBackgroundColor,
            borderColor: myBorderColor,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
document.getElementById('grafica').style.display = 'none';

let VerFecha = () => {
    let fecha = document.getElementById("fecha").value;
    if(fecha == "" || fecha == undefined){
        alert("Debe seleccionar una fecha primero")
    }
    else{
        fetch('http://192.168.2.186:3000/ver/'+fecha, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.text())
        .then(data => {
            let mdatos = JSON.parse(data);            
            let ele0 = mdatos.findIndex(lect => lect.hora == 0) === -1 ? 0 : mdatos[mdatos.findIndex(lect => lect.hora == 0)].valor;
            let ele1 = mdatos.findIndex(lect => lect.hora == 1) === -1 ? 0 : mdatos[mdatos.findIndex(lect => lect.hora == 1)].valor;
            let ele2 = mdatos.findIndex(lect => lect.hora == 2) === -1 ? 0 : mdatos[mdatos.findIndex(lect => lect.hora == 2)].valor;
            let ele3 = mdatos.findIndex(lect => lect.hora == 3) === -1 ? 0 : mdatos[mdatos.findIndex(lect => lect.hora == 3)].valor;
            let ele4 = mdatos.findIndex(lect => lect.hora == 4) === -1 ? 0 : mdatos[mdatos.findIndex(lect => lect.hora == 4)].valor;
            let ele5 = mdatos.findIndex(lect => lect.hora == 5) === -1 ? 0 : mdatos[mdatos.findIndex(lect => lect.hora == 5)].valor;
            let ele6 = mdatos.findIndex(lect => lect.hora == 6) === -1 ? 0 : mdatos[mdatos.findIndex(lect => lect.hora == 6)].valor;
            let ele7 = mdatos.findIndex(lect => lect.hora == 7) === -1 ? 0 : mdatos[mdatos.findIndex(lect => lect.hora == 7)].valor;
            let ele8 = mdatos.findIndex(lect => lect.hora == 8) === -1 ? 0 : mdatos[mdatos.findIndex(lect => lect.hora == 8)].valor;
            let ele9 = mdatos.findIndex(lect => lect.hora == 9) === -1 ? 0 : mdatos[mdatos.findIndex(lect => lect.hora == 9)].valor;
            let ele10 = mdatos.findIndex(lect => lect.hora == 10) === -1 ? 0 : mdatos[mdatos.findIndex(lect => lect.hora == 10)].valor;
            let ele11 = mdatos.findIndex(lect => lect.hora == 11) === -1 ? 0 : mdatos[mdatos.findIndex(lect => lect.hora == 11)].valor;
            let ele12 = mdatos.findIndex(lect => lect.hora == 12) === -1 ? 0 : mdatos[mdatos.findIndex(lect => lect.hora == 12)].valor;
            let ele13 = mdatos.findIndex(lect => lect.hora == 13) === -1 ? 0 : mdatos[mdatos.findIndex(lect => lect.hora == 13)].valor;
            let ele14 = mdatos.findIndex(lect => lect.hora == 14) === -1 ? 0 : mdatos[mdatos.findIndex(lect => lect.hora == 14)].valor;
            let ele15 = mdatos.findIndex(lect => lect.hora == 15) === -1 ? 0 : mdatos[mdatos.findIndex(lect => lect.hora == 15)].valor;
            let ele16 = mdatos.findIndex(lect => lect.hora == 16) === -1 ? 0 : mdatos[mdatos.findIndex(lect => lect.hora == 16)].valor;
            let ele17 = mdatos.findIndex(lect => lect.hora == 17) === -1 ? 0 : mdatos[mdatos.findIndex(lect => lect.hora == 17)].valor;
            let ele18 = mdatos.findIndex(lect => lect.hora == 18) === -1 ? 0 : mdatos[mdatos.findIndex(lect => lect.hora == 18)].valor;
            let ele19 = mdatos.findIndex(lect => lect.hora == 19) === -1 ? 0 : mdatos[mdatos.findIndex(lect => lect.hora == 19)].valor;
            let ele20 = mdatos.findIndex(lect => lect.hora == 20) === -1 ? 0 : mdatos[mdatos.findIndex(lect => lect.hora == 20)].valor;
            let ele21 = mdatos.findIndex(lect => lect.hora == 21) === -1 ? 0 : mdatos[mdatos.findIndex(lect => lect.hora == 21)].valor;
            let ele22 = mdatos.findIndex(lect => lect.hora == 22) === -1 ? 0 : mdatos[mdatos.findIndex(lect => lect.hora == 22)].valor;
            let ele23 = mdatos.findIndex(lect => lect.hora == 23) === -1 ? 0 : mdatos[mdatos.findIndex(lect => lect.hora == 23)].valor;
            let ele24 = mdatos.findIndex(lect => lect.hora == 24) === -1 ? 0 : mdatos[mdatos.findIndex(lect => lect.hora == 24)].valor;
            myData.length = 0;
            myData = [ele0, ele1, ele2, ele3, ele4, ele5, ele6, ele7, ele8, ele9, ele10, ele11, ele12,
            ele13, ele14, ele15, ele16, ele17, ele18, ele19, ele20, ele21, ele22, ele23, ele24];            
            if (myChart) {
                myChart.destroy();
            }
            myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: myLabels,
                    datasets: [{
                        label: 'Medidas',
                        data: myData,
                        backgroundColor: myBackgroundColor,
                        borderColor: myBorderColor,
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });            
        })
        .catch(err => console.log("Error al leer: " + err))
        alert("Fecha escogida: " + fecha)        
        document.getElementById('grafica').style.display = 'block';
        console.log({fecha})
    }    
}

let ResetearFecha = () => {
    document.getElementById("fecha").value = "";
    document.getElementById('grafica').style.display = 'none';
}