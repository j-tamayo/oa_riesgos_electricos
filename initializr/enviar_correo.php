<?php
	
	require 'php-mailer/PHPMailerAutoload.php';

	$match_code = 'r13sg0sucv';

	$name = $_POST['name'];
	$ci = $_POST['cedula'];
	$score = $_POST['puntaje'];
	$code = $_POST['codigo'];
	//echo $name. ' ' . $ci . ' ' . $score;die;
	
	if($code == $match_code){
		$mail = new PHPMailer;
		$mail->isSMTP();
		$mail->Host = "smtp.gmail.com";
		$mail->Port = 587;
		$mail->SMTPAuth = true;
		$mail->Username = "riesgos.electricos.ucv@gmail.com";
		$mail->Password = "riesgos-ucv";
		$mail->SMTPSecure = 'tls';
		
		$mail->From = 'riesgos.electricos.ucv@gmail.com';
		$mail->FromName = 'Objeto de Aprendizaje Riesgos Eléctricos';
		$mail->addAddress('riesgos.electricosoa@gmail.com'); 
		
		$mail->WordWrap = 50;
		$mail->Subject = 'Riesgo Eléctrico Resultado Autoevaluación';
		$mail->Body    = 'Un alumno ha realizado la autoevaluaci&oacute;n del Objeto de Aprendizaje de Riesgos El&eacute;ctricos<br/><table><tr><td>Alumno: </td><td>'.$name.' </td></tr><tr><td>C&eacute;dula: </td><td>'.$ci.' </td></tr><tr><td>Puntaje: </td><td>'.$score.' / 100</td></tr></table>';
		$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

		if(!$mail->send()) {
			echo 'Message could not be sent.';
			echo 'Mailer Error: ' . $mail->ErrorInfo;
		} else {
			echo 'Message has been sent';
		}
		header('Location: index.html');
	}
	else{
		echo '<h4>El c&oacute;digo que introduciste es incorrecto redirigiendo a la p&aacute;gina...</h4>';
		echo '<script type="text/javascript">setInterval(function () {location.href="index.html"}, 2000);</script>';
	}

	
?>