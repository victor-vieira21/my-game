var altura = 0
var largura = 0
var vidas = 1
var tempo = 20

var criaMosquitoTempo = 3000

var nivel = window.location.search
nivel = nivel.replace('?','')

if (nivel === 'normal'){
    criaMosquitoTempo = 2000
    
} else if (nivel === 'dificil'){
    criaMosquitoTempo = 1500

}else if (nivel === 'chuckNorris'){
    criaMosquitoTempo = 500
}


function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

    //cronometro

    var cronometro = setInterval(function(){

    	if( tempo <= 0) {
    		
    		clearInterval(cronometro)
    		clearInterval(cria_mosquito)
    		window.location.href = 'vitoria.html'
    	
    	}else {

         
         tempo -= 1

         document.getElementById('cronometro').innerHTML = tempo

    }},1000) 





     function posicaoRandomica(){

     	//remover objeto

     	if (document.getElementById('mosquito')){
     	document.getElementById('mosquito').remove()

     	if (vidas > 3) {
     		window.location.href = 'fim_de_jogo.html'

     	} else {

     	document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

     	vidas++}


     }

	var posicaoX = Math.floor(Math.random() * largura) - 220
	var posicaoY = 310


	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log (posicaoX,posicaoY)

	// criar elemento html

	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAladoB()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		this.remove()
	}

	document.body.appendChild(mosquito)

}

 function tamanhoAleatorio() {
 	 var classe = Math.floor(Math.random() * 3 )

 	 switch(classe) {

 	 	case 0:
 	 	  return 'mosquito1'

 	 	  case 1:
 	 	  return 'mosquito2'

 	 	  case 2:
 	 	  return 'mosquito3'
 	 }
 }

  function ladoAladoB() {
 	 var classe = Math.floor(Math.random() * 2 )

 	 switch(classe) {

 	 	case 0:
 	 	  return 'ladoA'

 	 	  case 1:
 	 	  return 'ladoB'

 	 	
 	 }
 }