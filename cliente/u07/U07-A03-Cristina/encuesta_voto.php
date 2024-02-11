<?php
// Parametros constantes
$url = 'resultado.txt';
$nombres = ['real', 'barcelona', 'atletico', 'sevilla'];
$nombre = $_GET['nombre'];

// Extraer el contenido y convertirlo en array
$contenido = file_get_contents($url);
$puntuaciones = explode('||', $contenido);

// Conseguir la posición a cambiar del array de puntuacion y aumentar la puntuación
$posicion = array_search($nombre, $nombres);
$puntuaciones[$posicion]++;

// Actualizar la puntuación en el archivo txt
file_put_contents($url, implode('||', $puntuaciones));

// Calcular los porcentajes
$votos_totales = array_sum($puntuaciones);

function porcentaje($valor)
{
    global $votos_totales;
    return round($valor * 100 / $votos_totales);
}

$porcentajes = array_map("porcentaje", $puntuaciones);

// Devolver el array con las puntuciones y los prcentajes
$respuesta = ["puntuaciones" => $puntuaciones, "porcentajes" => $porcentajes, "total" => $votos_totales];

echo json_encode($respuesta);