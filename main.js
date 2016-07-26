var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var frase = 'crear nuevo usuario';


var textError = document.querySelector('.error');

var escucha = document.querySelector('#start_img');

var activo = false;

function inicio(){
	
	
	if(activo){
		escucha.src = 'imagenes/mic.gif';
		activo = false;
	}
	else{
		escucha.src = 'imagenes/mic-animate.gif';
		activo = true;

		var gramatica = '#JSGF V1.0; grammar phrase; public <frase> = ' + frase +';';
		var reconocimiento = new SpeechRecognition();
		var listaReconocido = new SpeechGrammarList();
		listaReconocido.addFromString(gramatica,1);
		reconocimiento.grammar = listaReconocido;
		reconocimiento.lang = 'es-CO';
		reconocimiento.interimResults = false;
		reconocimiento.maxAlternatives = 1;

		reconocimiento.start();

		reconocimiento.onresult = function(event){

			var resultadoEscucha = event.results[0][0].transcript;
			textError.textContent = resultadoEscucha;
			if(resultadoEscucha === 'crear nuevo usuario'){
				console.log('crear');
				document.location="php/registro.php";
			}
			else{
				console.log('nada');
			}
			console.log('Confidencial: ' + event.results[0][0].confidence);
		}
	}
	reconocimiento.onspeechend = function() {
		reconocimiento.stop();
		escucha.src = 'imagenes/mic.gif';
		activo = false;
	}
	reconocimiento.onerror = function(event) {
		textError.textContent = 'Algo fallo intentalo de nuevo';
		console.log('error' +event.error);
	}
}

escucha.addEventListener('click', inicio);