<?php

include("conexion.php");
$con = conectar();

$id = $_POST['usuario'];
$contraseña = $_POST['contraseña'];
$repcontraseña = $_POST['repcontraña'];
$correo = $_POST['correo'];

$sql = "INSERT INTO registro VALUES ('$id', '$contraseña', '$repcontraseña', '$correo')"
$query = mysqli_query($con, $sql)

?>