const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const resultado = document.getElementById("resultado");

option1.addEventListener("click",function(){
  resultado.textContent = "incorrect!";
  resultado.style.color = "red";
})
option2.addEventListener("click", function(){
  resultado.textContent = "incorrect!";
  resultado.style.color = "red";
})
option3.addEventListener("click", function(){
  resultado.textContent = "correct!";
  resultado.style.color = "green";
})
