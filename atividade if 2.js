let peso = 70
let altura = 1.7
let imc = peso/(altura*altura)

switch (true) {
    
    case imc <= 18.5 : 
        console.log("Abaixo do peso")
    break;
    
    case  imc <= 24.9 && imc  >18.5 :
        console.log("Peso normal")
        break;
    
    case imc <= 29.9 && imc >25 : 
        console.log("Sobrepeso")
        break;
        
    default:
        console.log("CU ")
        break;
}