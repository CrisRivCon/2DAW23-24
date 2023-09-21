<?php
echo "Hola\n";
echo cos(4 * 3);
echo "\n";
// comentario 1
# comentario 2
/* comentario 3 */
/**
 * comentario de documentación
 */
$x = 5;
$y = 4;
echo $x + $y;
echo "\n";
unset($y);

// asignación por referencia, los dos comparten la variable.
$x =& $y;

// expansión de variable o interpolación de cadenas, sucede con las comillas dobles.
// siempre que sea posible utilizar comillas simples.

// concatenar con .
// no usar $x[1]  con cadenas, usar funciones predefinidas .




?>