<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="../styles.css">
</head>
<body>
	<h1>Crear Usuario Nuevo</h1>

	<p>Click en el microfono de cada campo y dinos la informacion que solicita el mismo</p>
	<form class="formulario" action="" method="post">

		<div class="contenorItems" id="Nombre">
			<input name="nombre" id="input_nom"type="text" placeholder="Nombre" class="formulario" required>
			<img alt="comienzo" class="start_img" id="start_nom" src="../imagenes/mic.gif">
		</div>
		<div class="contenorItems" id="Apellidos">
			<input name="apellido" id="input_ape"type="text" placeholder="Apellidos" class="formulario" required>
			<img alt="comienzo" class="start_img" id="start_ape" src="../imagenes/mic.gif">
		</div>
		<div class="contenorItems" id="Edad">
			<input name="edad" id="input_edad"type="number" placeholder="Edad" class="formulario" required>
			<img alt="comienzo" class="start_img" id="start_edad" src="../imagenes/mic.gif">
		</div>
		<div class="contenorItems" id="NumTel">
			<input name="numTel" id="input_numTel"type="tel" placeholder="Número de Telefono" class="formulario" required>
			<img alt="comienzo" class="start_img" id="start_numTel" src="../imagenes/mic.gif">
		</div>
	
		<button>Guardar</button>

	</form>
	<div>
		<p class='error'>
			<?php
			if($_POST){
				include_once 'usuario.php';

				$nombre=$_POST['nombre'];
				$apellido=$_POST['apellido'];
				$edad=$_POST['edad'];
				$numTel=$_POST['numTel'];

				$nuevo = new acciones();

				$msg = $nuevo->nuevoUsuario($nombre,$apellido,$edad,$numTel);

				if($msg= true){
						echo "Se creo correctamente el usuario.";
					}
					else{
						echo "Algo salio mal";
					}
				}
			?>
         </p>    
    </div>
    <script type="text/javascript" src="main.js"></script>
</body>
</html>