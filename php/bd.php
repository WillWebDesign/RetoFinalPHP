<?php

	$usuario="root";
	$host="localhost";
	$pass="";
	$db="usuarioRetoPHP";

	$mysql= new mysqli($host,$usuario,$pass,$db);

	if($mysql->connect_errno){
		echo "La conexion a la base de datos a fallado"."</br>".$mysql->connect_errno."</br>".$mysql->connect_error;
	}
	$mysql->query("SET NAMES 'utf8'");	
?>