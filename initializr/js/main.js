var ar = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
var directo_curr = 1;
var indirecto_curr = 1;
var medida_curr = 1;
var score= 0;
function initialize_poll(q){
	score = 0;
	$('#autoevaluacion').html('');
	$('#autoevaluacion').append('<div class="row"><div class="col-xs-12 text-center"><h2>Cuestionario</h2></div></div>')
	ar.sort(function () {
      return Math.random() - 0.5;
  	});
	
	actual_questions = [];
	/*for(i=0;i<5;i++){
		console.log(q[ar[i]]);
	}*/
	//console.log(actual_questions);
	for (i=0; i<5; i++){
		$('#autoevaluacion').append('\
			<div class="row">\
			<div class="col-xs-12">\
				'+q[ar[i]].title+'\
			</div>\
			</div>\
		');
		for (j=0; j<4; j++){
			$('#autoevaluacion').append('\
				<div class="row">\
				<div class="col-xs-offset-1 col-xs-11">\
					<input type="radio" name="'+ar[i]+'" value="'+(j+1)+'">'+q[ar[i]].options[j]+'\
				</div>\
				</div>\
			');
		}
		$('#autoevaluacion').append('<br/>');
	}

	$('#autoevaluacion').append('<div class="row"><div class="col-xs-4 col-xs-offset-4"><a id="send_form" href="#" class="btn btn-primary col-xs-12">Enviar</a></div></div>');
	
}

function change_section(section, sense){
	$('#'+section+'_'+directo_curr).fadeOut(400, function(){
		$('#'+section+'_'+directo_curr).fadeIn();
	});
	if(sense == 'right'){
		directo_curr++;
		if (directo_curr > 7)
			directo_curr = 1;
	}
	else{
		directo_curr--;
		if (directo_curr<1){
			directo_curr = 7;
		}
	}
	//setInterval(function () {$('#'+section+'_'+directo_curr).fadeIn();}, 500);
	

}

function change_section_indirecto(section, sense){
	$('#'+section+'_'+indirecto_curr).hide();
	if(sense == 'right'){
		indirecto_curr++;
		if (indirecto_curr > 2)
			indirecto_curr = 1;
	}
	else{
		indirecto_curr--;
		if (indirecto_curr<1){
			indirecto_curr = 2;
		}
	}
	$('#'+section+'_'+indirecto_curr).show();

}

function change_medida(sense){
	$('#medida_'+medida_curr).hide();
	if(sense == 'right'){
		medida_curr++;
		if (medida_curr > 6)
			medida_curr = 1;
	}
	else{
		medida_curr--;
		if (medida_curr<1){
			medida_curr = 6;
		}
	}
	$('#medida_'+medida_curr).show();
}

function calculate_result(q){
	send = true;
	score = 0;
	for(i=0;i<5;i++){
		val_res = $('input[name="'+ar[i]+'"]:checked').val();
		console.log(val_res);
		console.log(q[ar[i]].answer);
		if(typeof val_res==='undefined'){
			alert('Debes responder todas las preguntas');
			send = false;
			break;
		}
		if(val_res == q[ar[i]].answer){
			score+=20;
		}
	}
	console.log(score);
	if(send){
		$('#result_score').html('<h2>'+score+'/100'+'</h2>');
		$('#result_modal').modal();
	}
}

$(function(){

	questions_json = '[{"title":"Los accidentes eléctricos se clasifican en","answer":"2","options":["Electrización por inducción y Contacto eléctrico directo","Contacto eléctrico directo y Contacto eléctrico indirecto","Electrización de cuerpos y Contacto eléctrico indirecto","Electrización por inducción y Electrización de cuerpos"]},{"title":"¿Cuáles de los siguientes son un efecto de accidentes eléctricos por contacto directo?","answer":"1","options":["Electrización y Quemaduras","Embolias y Fiebre","Bajas de azúcar y Tentanización","Ninguna de las anteriores"]},{"title":"¿Qué es la Tentanización?","answer":"3","options":["El paso de corriente por el corazón produciendo un paro circulatorio","La aparición de coágulos en la sangre que pueden obstruir arterias","La incapacidad de separación voluntaria con el punto de contacto eléctrico","El cosquilleo al percibir el paso de la corriente"]},{"title":"¿Cómo podemos prevenir los accidentes eléctricos?","answer":"2","options":["Utilizando cables defectuosos y usando aparatos con carcasas defectuosas","Examinando periódicamente el estado de los cables flexibles","Utilizando varias tomas múltiples","Utilizando instalaciones eléctricas mojadas"]},{"title":"¿Qué hacer en caso de ver que alguien este en contacto con una fuente eléctrica?","answer":"2","options":["Empujarlo para hacerlo reaccionar","Avisar de inmediato al servicio de urgencias","Tomarle las manos para alejarlo de la fuente eléctrica","Darle respiración boca a boca"]},{"title":"Un riesgo eléctrico puede ser visto como:","answer":"4","options":["Choque eléctrico por contacto con elementos en tensión","Quemaduras por choques o arco eléctricos","Incendios o explosiones originados por la electricidad","Todas las anteriores"]},{"title":"Si alguien se está electrocutando y es imposible cortar la electricidad ¿Que deberiamos hacer?","answer":"1","options":["Intentar desenganchar a la persona electrizada con un elemento aislante","Tomarle las manos para alejarlo de la fuente eléctrica","Empujarlo para hacerlo reaccionar","Todas las anteriores"]},{"title":"¿Cuáles de los siguientes no son un efecto de accidentes eléctricos por contacto directo?","answer":"3","options":["Tentanización y Quemaduras","Embolias y Paros cardíacos","Bajas de azúcar y Fiebre","Asfixia y Paro respiratorio"]},{"title":"¿Cómo se definen los accidentes eléctricos por contacto directo?","answer":"1","options":["Es el contacto de personas con partes eléctricamente activas","Es el electrocutamiento por medio de agua","Es el contacto de las personas con algún conductor electrico con fallas de aislamiento","Ninguna de las anteriores"]},{"title":"¿Cómo se definen los accidentes eléctricos por contacto indirecto?","answer":"1","options":["Es el contacto de las personas con elementos conductores puesto accidentalmente bajo tensión por fallos de aislamiento","Es el contacto de las personas con elementos eléctricamente activos","Son explosiones causadas por algún medio eléctrico","Todas las anteriores"]},{"title":"¿Qué es la electrización?","answer":"4","options":["Es cuando un equipo recibe una sobrecarga eléctrica","La interrupción de la corriente","Sobrecarga en el sistemo eléctrico","Es cuando se producen movimientos reflejo en el organismo"]},{"title":"¿Qué tipo de afección causa la aparición de coágulos en la sangre que pueden obstruir alguna arteria?","answer":"1","options":["Embolia","Electrización","Tentanización","Percepción"]},{"title":"¿Cuántos aparatos es recomendable que se conecten por enchufe?","answer":"2","options":["3","1","2","No importa la cantidad"]},{"title":"¿Qué es lo que no se debe hacer con los tableros eléctricos?","answer":"3","options":["Avisar al responsable del laboratorio sobre un desperfecto","Sujetar y aislar todas las líneas de entrada","Manipularlos sin conocimiento ni supervisación","No permitir que se manipulen nunca"]},{"title":"El paro cardiaco es una afección por","answer":"2","options":["Contacto indirecto","Contacto directo","Impulsos eléctricos","No permitir que se manipulen nunca"]}]';

	questions = JSON.parse(questions_json);
	//console.log(questions);

	$('.nav-pills li').click(function(){
		$('.active-section').hide();
		$('.active').removeClass('active');
		$('.active-section').removeClass('active-section');
		$('#'+$(this).attr('target')).show();
		$('#'+$(this).attr('target')).addClass('active-section');
		$(this).addClass('active');

		if($(this).attr('target')=='autoevaluacion'){
			initialize_poll(questions);
		}
	});

	
	$('#activar_modal_afecciones_directo').click(function(){
		$('#afecciones_directo').modal();
	});

	$('.directo_change').click(function(){
		
		if ($(this).attr('sense') == 'right')
			change_section('directo', 'right');
		else
			change_section('directo', 'left');
	})

	$('#activar_modal_afecciones_indirecto').click(function(){
		$('#afecciones_indirecto').modal();
	});

	$('.indirecto_change').click(function(){
		
		if ($(this).attr('sense') == 'right')
			change_section_indirecto('indirecto', 'right');
		else
			change_section_indirecto('indirecto', 'left');
	});

	$('.medida_change').click(function(){
		console.log(medida_curr);
		if ($(this).attr('sense') == 'right')
			change_medida('right');
		else
			change_medida('left');		
	});

	$(document).on('click', '#send_form', function(){
		calculate_result(questions);
	});
});