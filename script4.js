
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

!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>
<body>
    <button onclick="javascript: mensaje('hola jose');">CLICK AQUÍ</button>
    <script src="script.js"></script>
</body>
</html>

function mensaje(men) {
    alert(men);
}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>
<body>
    <button onclick="javascript: mensaje('32, 'hombre');">CLICK AQUÍ</button>
    <script src="script.js"></script>
</body>
</html>

function mensaje(men) {
    if(edad=>18 && sexo=="hombre"){
    alert("si puedes pasar");}
    }

function mensaje(edad, sexo){
    if(edad>=16 && sexo=="mujer"){
        alert("si puedes pasar");
    }else {
        alert("no puedes pasar")
    }
}

function mensaje(edad){
    
    if(edad<=10){
        alert("soy niño");
    }else if(edad <=17){
        alert("soy un joven");
    }else if(edad <=64){
        alert("soy un adulto");
    }else {
        alert("soy un anciano")
    }

}  

function mensaje(sexo){
    
    switch (sexo) {
        case "M", "m", "Masculino", "masculino", "MASCULINO" :
        alert("soy hombre")
        break;
        
        case "F", "f", "FEMENINO", "femenino", "Femenino":
        alert("soy mujer")
        break;
        
        default:
        alert("No definido")
        break;
    }
}

function mensaje(edad){
    
    var mayoríadeedad = (edad >= 18) ? "Mayor de edad" : "Menor de edad"

    alert(mayoríadeedad);
}
    


