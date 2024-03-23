var peso
var altura
var imc
var resultado


function calcular(event) {
    event.preventDefault()
    
    peso = document.getElementById('peso').value
    altura = document.getElementById('altura').value
    imc = peso / (altura * altura)

    resultado = document.getElementById('resultado')

    if(imc < 17) {
        resultado.innerHTML = "Seu resultado foi: " + imc.toFixed(2) + "<br/> Muito abaixo do peso"
    } else if(imc <= 18.49) {
        resultado.innerHTML = "Seu resultado foi: " + imc.toFixed(2) + "<br/> Abaixo do peso"
    } else if(imc <= 24.99) {
        resultado.innerHTML = "Seu resultado foi: " + imc.toFixed(2) + "<br/> Peso normal"
    } else if(imc <= 29.99) {
        resultado.innerHTML = "Seu resultado foi: " + imc.toFixed(2) + "<br/> Acima do peso"
    } else {
        resultado.innerHTML = "Seu resultado foi: " + imc.toFixed(2) + "<br/> Você está obeso"
    }

    document.getElementById('peso').value = ''
    document.getElementById('altura').value = ''

}