<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado</title>
</head>

<body>
    <?php
    $errores = [];

    $op1 = $_GET['op1'];

    if(!is_numeric($op1)){
        $errores[] = 'El primer operando es incorrecto.';
    }

    $op2 = $_GET['op2'];

    if(!is_numeric($op2)){
        $errores[] = 'El segundo operando es incorrecto.';
    }

    $op = $_GET['op'];
    $operadores = ['+', '-', '*', '/'];
    if (!in_array($op, $operadores)){
        $errores[] = 'El operador es incorrecto.';
    }

    if(empty($errores)):
        switch ($op):
            case '+':
                $res = $op1 + $op2;
                break;
            case '-':
                $res = $op1 - $op2;
                break;
            case '*':
                $res = $op1 * $op2;
                break;
            case '/':
                $res = $op1 / $op2;
                break;
            endswitch;
            ?>
            El resultado es <?= $res ?>
        <?php else: ?>

            <?php for ($i=0; $i < count($errores); $i++) ?>
               <?= $errores[$i] ?>
            
            <?php endfor ?>
    <?php endif ?>
    El resultado es <?= $res ?>
</body>

</html>