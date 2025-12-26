let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Desarrollo dashboards en POWER BI y me gusta la programación.')
  .pauseFor(200)
  .deleteChars(10)
  .start();