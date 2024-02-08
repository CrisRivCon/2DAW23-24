<?php

$url = 'resultado.txt';
$nombre = $_GET['nombre'];
$nombres = ['real', 'barcelona', 'atletico', 'sevilla'];

$contenido = file_get_contents($url);
echo $nombre;