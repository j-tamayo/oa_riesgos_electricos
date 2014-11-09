var ar = [0,1,2,3,4,5,6,7,8,9];
var directo_curr = 1;
function initialize_poll(q){
	$('#autoevaluacion').html('');
	$('#autoevaluacion').append('<div class="row"><div class="col-xs-12 text-center"><h4>Cuestionario</h4></div></div>')
	ar.sort(function () {
      return Math.random() - 0.5;
  	});
	console.log(ar);
	actual_questions = [];
	for(i=0;i<5;i++){
		console.log(q[ar[i]]);
	}
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
					<input type="radio" name="'+ar[i]+'" value="1">'+q[ar[i]].options[j]+'\
				</div>\
				</div>\
			');
		}
		$('#autoevaluacion').append('<br/>');
	}

	$('#autoevaluacion').append('<div class="row"><div class="col-xs-12 center-block"><a href="#" class="btn btn-primary col-xs-3">Enviar</a></div></div>');
	
}

function change_section(section, sense){
	$('#'+section+'_'+directo_curr).hide();
	if(sense == 'right'){
		directo_curr++;
		if (directo_curr > 3)
			directo_curr = 1;
	}
	else{
		directo_curr--;
		if (directo_curr<1){
			directo_curr = 3;
		}
	}
	$('#'+section+'_'+directo_curr).show();

}

$(function(){

	questions_json = '[{"title":"Los accidentes eléctricos se clasifican en","options":["Electrización por inducción y Contacto eléctrico directo","Contacto eléctrico directo y Contacto eléctrico indirecto","Electrización de cuerpos y Contacto eléctrico indirecto","Electrización por inducción y Electrización de cuerpos"]},{"title":"¿Cuáles de los siguientes son un efecto de accidentes eléctricos por contacto directo?","options":["Electrización y Quemaduras","Embolias y Fiebre","Bajas de azúcar y Tentanización","Ninguna de las anteriores"]},{"title":"¿Qué es la Tentanización?","options":["El paso de corriente por el corazón produciendo un paro circulatorio","La aparición de coágulos en la sangre que pueden obstruir arterias","La incapacidad de separación voluntaria con el punto de contacto eléctrico","El cosquilleo al percibir el paso de la corriente"]},{"title":"¿Cómo podemos prevenir los accidentes eléctricos?","options":["Utilizando cables defectuosos y usando aparatos con carcasas defectuosas","Examinando periodicamente el estado de los cables flexibles","Utilizando varias tomas múltiples","Utilizando instalaciones eléctricas mojadas"]},{"title":"¿Qué hacer en caso de ver que alguien este en contacto con una fuente eléctrica?","options":["Empujarlo para hacerlo reaccionar","Avisar de inmediato al servicio de urgencias","Tomarle las manos para alejarlo de la fuente eléctrica","Darle respiración boca a boca"]},{"title":"Un riesgo eléctrico puede ser visto como:","options":["Choque eléctrico por contacto con elementos en tensión","Quemaduras por choques o arco eléctricos","Incendios o explosiones originados por la electricidad","Todas las anteriores"]},{"title":"Si alguien se está electrocutando y es imposible cortar la electricidad ¿Que deberiamos hacer?","options":["Intentar desenganchar a la persona electrizada con un elemento aislante","Tomarle las manos para alejarlo de la fuente eléctrica","Empujarlo para hacerlo reaccionar","Todas las anteriores"]},{"title":"¿Cuáles de los siguientes no son un efecto de accidentes eléctricos por contacto directo?","options":["Tentanización y Quemaduras","Embolias y Paros cardíacos","Bajas de azúcar y Fiebre","Asfixia y Paro respiratorio"]},{"title":"¿Cómo se definen los accidentes eléctricos por contacto directo?","options":["Es el contacto de personas con partes eléctricamente activas","Es el electrocutamiento por medio de agua","Es el contacto de las personas con algún conductor electrico con fallas de aislamiento","Ninguna de las anteriores"]},{"title":"¿Cómo se definen los accidentes eléctricos por contacto indirecto?","options":["Es el contacto de las personas con elementos conductores puesto accidentalmente bajo tensión por fallos de aislamiento","Es el contacto de las personas con elementos eléctricamente activos","Son explosiones causadas por algún medio eléctrico","Todas las anteriores"]}]';

	questions = JSON.parse(questions_json);
	console.log(questions);

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

	
	$('#activar_modal_afecciones').click(function(){
		$('#afecciones').modal();
	});

	$('.directo_change').click(function(){
		if ($(this).attr('sense') == 'right')
			change_section('directo', 'right');
		else
			change_section('indirecto', 'left');
	})
});