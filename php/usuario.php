<?php
class acciones{



	public function nuevoUsuario ($nombre, $apellidos, $edad, $numeroDeTel){
		include_once 'bd.php';
		$consulta='insert into usuario values(null,"'.$nombre.'","'.$apellidos.'",'.$edad.',"'.$numeroDeTel.'");';
		$resultado=$mysql->query($consulta);
		if(!$resultado){
			echo "La conexion a la base de datos a fallado"."</br>".$mysql->connect_errno."</br>".$mysql->connect_error;
		}
		else{
			return true;
		}
	}
}
?>