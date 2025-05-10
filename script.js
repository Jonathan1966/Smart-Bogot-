// script.js

function generarAleatorio(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}

let chart;
let labels = [];
let energyData = [];

function actualizarDashboard() {
  const co2 = generarAleatorio(400, 800);
  const energy = generarAleatorio(1, 10);
  const temp = generarAleatorio(20, 35);
  const noise = generarAleatorio(30, 90);
  const calidadAire = ['Buena', 'Moderada', 'Dañina', 'Muy Dañina'];
  const nivel = Math.floor(Math.random() * calidadAire.length);

  document.getElementById('co2').textContent = co2;
  document.getElementById('energy').textContent = energy;
  document.getElementById('temp').textContent = temp;
  document.getElementById('noise').textContent = noise;
  document.getElementById('airQuality').textContent = calidadAire[nivel];

  actualizarGrafico(energy);
  verificarAlertas(co2, noise);
}

function verificarAlertas(co2, noise) {
  if (parseFloat(co2) > 700) {
    alert('⚠️ Nivel alto de CO₂ detectado. Considere ventilar el área.');
  }

  if (parseFloat(noise) > 80) {
    alert('🔊 Nivel de ruido elevado. Podría afectar la salud auditiva.');
  }
}

function inicializarGrafico() {
  const ctx = document.getElementById('energyChart').getContext('2d');
  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Consumo Energético (kWh)',
        data: energyData,
        fill: false,
        borderColor: '#006699',
        tension: 0.1
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Tiempo'
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'kWh'
          }
        }
      }
    }
  });
}

function actualizarGrafico(nuevoValor) {
  const hora = new Date().toLocaleTimeString();
  if (labels.length >= 10) {
    labels.shift();
    energyData.shift();
  }
  labels.push(hora);
  energyData.push(parseFloat(nuevoValor));
  chart.update();
}

window.onload = () => {
  inicializarGrafico();
  actualizarDashboard();
  setInterval(actualizarDashboard, 5000);
};
