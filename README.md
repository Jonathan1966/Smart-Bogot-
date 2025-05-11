# 🌆 SMART BOGOTÁ - Dashboard IoT

**SMART BOGOTÁ** es un prototipo de dashboard web diseñado para monitorear variables ambientales y energéticas en tiempo real, como parte de un proyecto académico orientado a la **optimización de servicios públicos mediante IoT, inteligencia artificial y computación en la nube**.

## 📊 ¿Qué hace este proyecto?

Este dashboard simula el comportamiento de un sistema de monitoreo urbano, mostrando los siguientes indicadores:

- 🌿 **CO₂ (ppm)**
- ⚡ **Consumo energético (kWh)**
- 🌡️ **Temperatura (°C)**
- 🔊 **Ruido ambiental (dB)**
- 🌫️ **Calidad del aire**

Además, incluye un **gráfico dinámico** que muestra la evolución del consumo energético en los últimos minutos.

## ⚙️ ¿Cómo funciona?

- Los datos se **generan aleatoriamente** cada 5 segundos para simular un entorno real.
- Los indicadores se actualizan automáticamente en la interfaz.
- Se incluye un sistema de **alertas visuales**:
  - Si el CO₂ > 700 ppm → se muestra un mensaje de advertencia.
  - Si el ruido > 80 dB → se advierte sobre riesgos auditivos.
- El gráfico de líneas está implementado con **Chart.js** y conserva solo los **últimos 10 registros** para evitar sobrecarga visual.

## 💻 Tecnologías utilizadas

- **HTML5** – Estructura de la página.
- **CSS3** – Estilo visual y diseño responsivo.
- **JavaScript** – Lógica
