
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body >
    
    <button onmouseover="javascript: mostrarNombre(producto);" 
    onmouseout="javascript: mostrarCantidad(producto);">CLICK AQUI</button>

    <script>
        var producto = {
            nombre: "TV 60''",
            precio: 1500.50,
            cantidad: 20,
            disponibilidad: true,
            colores: ["negro","gris"],
            precioFinal: function(){
                return this.precio + this.precio*0.18;
            }
        }

        function mostrarNombre(obj){
            alert(obj.nombre)
        }
        function mostrarCantidad(obj){
            alert(obj.cantidad)
        }
    </script>
</body>
</html>
