<?php
$url =  "U07-A02-Cristina.json";

$buscar = trim($_GET['buscar']);

$datos = file_get_contents($url);
$datos_ciudades = json_decode($datos, true);

function buscar($array) 
{
    global $buscar;
    return preg_grep("/^{$buscar}/i", $array);
}

$resultado = array_filter($datos_ciudades, 'buscar') ;
echo json_encode($resultado);