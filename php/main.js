var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var frases = 'crear nuevo usuario | consultar usuario'


var textError = document.querySelector('.error');

var campoNom = document.querySelector('#input_nom');
var campoApe = document.querySelector('#input_ape');
var campoEdad = document.querySelector('#input_edad');
var campoNumTel = document.querySelector('#input_numTel');

var escuchaNom = document.querySelector('#start_nom');
var escuchaApe = document.querySelector('#start_ape');
var escuchaEdad = document.querySelector('#start_edad');
var escuchaNumTel = document.querySelector('#start_numTel');

var activo = false;

function inicioNom(){
	
	
	if(activo){
		escuchaNom.src = '../imagenes/mic.gif';
		activo = false;
	}
	else{
		escuchaNom.src = '../imagenes/mic-animate.gif';
		activo = true;

		var reconocimiento = new SpeechRecognition();
		reconocimiento.lang = 'es-CO';
		reconocimiento.interimResults = false;
		reconocimiento.maxAlternatives = 1;

		reconocimiento.start();

		reconocimiento.onresult = function(event){

			var resultadoEscucha = event.results[0][0].transcript;
			textError.textContent = resultadoEscucha;
			if(resultadoEscucha != ''){
				console.log('correcto');
				campoNom.value=resultadoEscucha;
			}
			else{
				textError.textContent = "No escuchamos nada. Intentalo de nuevo!"

			}
			
			console.log('Confidencial: ' + event.results[0][0].confidence);
		}
	}
	reconocimiento.onspeechend = function() {
		reconocimiento.stop();
		escuchaNom.src = '../imagenes/mic.gif';
		activo = false;
	}
	reconocimiento.onerror = function(event) {
		textError.textContent = 'Algo fallo intentalo de nuevo';
		console.log('error' +event.error);
	}
}
function inicioApe(){
	
	
	if(activo){
		escuchaApe.src = '../imagenes/mic.gif';
		activo = false;
	}
	else{
		escuchaApe.src = '../imagenes/mic-animate.gif';
		activo = true;

		var reconocimiento = new SpeechRecognition();
		reconocimiento.lang = 'es-CO';
		reconocimiento.interimResults = false;
		reconocimiento.maxAlternatives = 1;

		reconocimiento.start();

		reconocimiento.onresult = function(event){

			var resultadoEscucha = event.results[0][0].transcript;
			textError.textContent = resultadoEscucha;
			if(resultadoEscucha != ''){
				console.log('correcto');
				campoApe.value=resultadoEscucha;
			}
			else{
				textError.textContent = "No escuchamos nada. Intentalo de nuevo!"

			}
			
			console.log('Confidencial: ' + event.results[0][0].confidence);
		}
	}
	reconocimiento.onspeechend = function() {
		reconocimiento.stop();
		escuchaApe.src = '../imagenes/mic.gif';
		activo = false;
	}
	reconocimiento.onerror = function(event) {
		textError.textContent = 'Algo fallo intentalo de nuevo';
		console.log('error' +event.error);
	}
}
function inicioEdad(){
	
	
	if(activo){
		escuchaEdad.src = '../imagenes/mic.gif';
		activo = false;
	}
	else{
		escuchaEdad.src = '../imagenes/mic-animate.gif';
		activo = true;

		var reconocimiento = new SpeechRecognition();
		reconocimiento.lang = 'es-CO';
		reconocimiento.interimResults = false;
		reconocimiento.maxAlternatives = 1;

		reconocimiento.start();

		reconocimiento.onresult = function(event){

			var resultadoEscucha = event.results[0][0].transcript;
			textError.textContent = resultadoEscucha;
			if(resultadoEscucha != ''){
				console.log('correcto');
				campoEdad.value=resultadoEscucha;
			}
			else{
				textError.textContent = "No escuchamos nada. Intentalo de nuevo!"

			}
			
			console.log('Confidencial: ' + event.results[0][0].confidence);
		}
	}
	reconocimiento.onspeechend = function() {
		reconocimiento.stop();
		escuchaEdad.src = '../imagenes/mic.gif';
		activo = false;
	}
	reconocimiento.onerror = function(event) {
		textError.textContent = 'Algo fallo intentalo de nuevo';
		console.log('error' +event.error);
	}
}
function inicioNumTel(){
	
	
	if(activo){
		escuchaNumTel.src = '../imagenes/mic.gif';
		activo = false;
	}
	else{
		escuchaNumTel.src = '../imagenes/mic-animate.gif';
		activo = true;

		var reconocimiento = new SpeechRecognition();
		reconocimiento.lang = 'es-CO';
		reconocimiento.interimResults = false;
		reconocimiento.maxAlternatives = 1;

		reconocimiento.start();

		reconocimiento.onresult = function(event){

			var resultadoEscucha = event.results[0][0].transcript;
			textError.textContent = resultadoEscucha;
			if(resultadoEscucha != ''){
				console.log('correcto');
				campoNumTel.value=resultadoEscucha;
			}
			else{
				textError.textContent = "No escuchamos nada. Intentalo de nuevo!"

			}
			
			console.log('Confidencial: ' + event.results[0][0].confidence);
		}
	}
	reconocimiento.onspeechend = function() {
		reconocimiento.stop();
		escuchaNumTel.src = '../imagenes/mic.gif';
		activo = false;
	}
	reconocimiento.onerror = function(event) {
		textError.textContent = 'Algo fallo intentalo de nuevo';
		console.log('error' +event.error);
	}
}
escuchaNom.addEventListener('click', inicioNom);
escuchaApe.addEventListener('click', inicioApe);
escuchaEdad.addEventListener('click', inicioEdad);
escuchaNumTel.addEventListener('click', inicioNumTel);
