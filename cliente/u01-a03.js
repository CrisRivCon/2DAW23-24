function ing(){
  document.write(enText);
}
function ru(){
  document.write(ruText);
}
function es(){
  document.write(esText);
}

var button1 = document.getElementById("a");
var button2 = document.getElementById("b");
var button3 = document.getElementById("c");

var enText = "<p style=\"color: orange;\">Welcome!</p>";
var ruText = "<p style=\"color: blue;\">добро пожаловать</p>";
var esText = "<p style=\"color: green;\">Bienvenida!</p>";

button1.addEventListener("click", ing);

button2.addEventListener("click", ru);

button3.addEventListener("click", es);

