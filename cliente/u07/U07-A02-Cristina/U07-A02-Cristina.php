<?php
$url =  "U07-A02-Cristina.php";

$buscar = $_GET('buscar');


$datos = file_get_contents($url);
$datos_cuidades = json_decode($datos);

$json = json_encode($buscar);

echo $buscar;