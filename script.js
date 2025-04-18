let temperature = 0; // 0 = neutro, + = calor, - = frío

function updateBackground() {
  if (temperature > 3) {
    document.body.style.backgroundColor = "red";
  } else if (temperature < -3) {
    document.body.style.backgroundColor = "blue";
  } else {
    document.body.style.backgroundColor = "white";
  }
}

function adjustTemperature(change) {
  temperature += change;
  updateBackground();
}

// Empezar el juego con cambios automáticos
setInterval(() => {
  let random = Math.random() < 0.5 ? -1 : 1;
  temperature += random;
  updateBackground();
}, 2000); // cada 2 segundos cambia la temp
