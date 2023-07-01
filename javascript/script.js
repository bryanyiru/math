function retângulo() { 
    var base = document.querySelector('#bas')
    var altura = document.querySelector('#alt')

    var resposta = base.value * altura.value

    document.querySelector('#res').innerHTML = resposta

}
function triângulo() {
    var base = document.querySelector('#bas')
    var altura = document.querySelector('#alt')
    
    var resposta = (base.value * altura.value)/2
    
    document.querySelector('#res').innerHTML = resposta

}
function circulo(){
    var raio = document.querySelector('#ra')
    
    var resposta = Math.PI * raio.value * raio.value
    document.querySelector('#res').innerHTML = resposta.toFixed(3)
}
function gasolina(){
    var etanol = document.querySelector('#eta')
    
    var gasolina = document.querySelector('#gas') 
    
    if((etanol.value/gasolina.value)<=0.7){
        document.querySelector('#res').innerHTML='etanol'
    }else{
        document.querySelector('#res').innerHTML='gasolina'
    }

}