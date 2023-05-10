const prompt = require('prompt-sync')();


let peso = prompt("Qual seu peso ? ") 
let altura = prompt("Qual sua altura ? ")
let resultado

let imc = (peso / Math.pow(altura, 2)).toFixed(2)

if(imc < 18.50){
    resultado = "Magreza"
} else if  (imc >= 18.5 && imc < 24.90){
    resultado = "Normal"
} else if  (imc >= 24.9 && imc < 30){
    resultado = "Sobrepeso"
} else if  (imc >= 30){
    resultado = "Obesidade"
}

console.log('O cálculo do seu IMC resultou em ' + imc + " \nIndicando que o seu corpo está em " + resultado)
