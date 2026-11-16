const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const resultado = document.getElementById("resultado");

option1.addEventListener("click",function(){
  resultado.textContent = "incorrecto!";
  resultado.style.color = "red";
})
option2.addEventListener("click", function(){
  resultado.textContent = "incorrecto!";
  resultado.style.color = "red";
})
option3.addEventListener("click", function(){
  resultado.textContent = "correcto!";
  resultado.style.color = "green";
})
