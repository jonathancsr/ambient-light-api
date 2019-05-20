const sensor = new AmbientLightSensor();
sensor.start(); sensor.addEventListener('activate', () => {
  console.log('Ready to report readings');
});
sensor.addEventListener('error', error => {
  console.error(error);
}); 
sensor.addEventListener('reading', () => {
  const illuminance = sensor.illuminance;
});

sensor.addEventListener('reading', () => {
  const illuminance = sensor.illuminance;
  if (illuminance < 20) {
    html.classList.add('dark');
  } else if (illluminance > 30) {
    html.classList.remove('dark');
  }
});

if (window.AmbientLightSensor) {
  alert("suportttt")
}