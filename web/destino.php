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
        <p>Nombre: <?php echo $_POST['nombre']?></p>
        <p>DNI: <?php echo $_POST['dni']?></p>
        <p>Apellidos: <?php echo $_POST['apellidos']?></p>
        <p>Dirección: <?php echo $_POST['direccion']?></p>
        <p>Teléfono: <?php echo $_POST['telefono']?></p>
    </div>
</body>
</html>