<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Respuesta</title>
</head>
<body>
    <div>
        <h1>Ficha de Cliente</h1>
        <p>Nombre: <?php echo $_GET['nombre']?></p>
        <p>DNI: <?php echo $_GET['dni']?></p>
        <p>Apellidos: <?php echo $_GET['apellidos']?></p>
        <p>Dirección: <?php echo $_GET['direccion']?></p>
        <p>Teléfono: <?php echo $_GET['telefono']?></p>
    </div>
</body>
</html>