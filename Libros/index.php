<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conecta a la base de datos  con usuario, contraseña y nombre de la BD
$servidor = "localhost"; $usuario = "root"; $contrasenia = ""; $nombreBaseDatos = "eie";
$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);


// Consulta datos y recepciona una clave para consultar dichos datos con dicha clave
if (isset($_GET["consultar"])){
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM contenido WHERE id=".$_GET["consultar"]);
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}
//borrar pero se le debe de enviar una clave ( para borrado )
if (isset($_GET["borrar"])){
    $sqlEmpleaados = mysqli_query($conexionBD,"DELETE FROM contenido WHERE id=".$_GET["borrar"]);
    if($sqlEmpleaados){
        echo json_encode(["success"=>1]);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}
//Inserta un nuevo registro y recepciona en método post los datos de nombre y correo
if(isset($_GET["insertar"])){
    $data = json_decode(file_get_contents("php://input"));
    $titulo=$data->titulo;
    $fecha=$data->date;
    $costo=$data->costo;
    $disponibles=$data->disponibles;
    if(($titulo!="")&&($fecha!="")&&($costo!="")&&($disponibles!="")){
        $sqlEmpleaados = mysqli_query($conexionBD,"INSERT INTO contenido(titulo,fecha,costo,disponibles) VALUES('$titulo','$fecha','$costo','$disponibles') ");
        echo json_encode(["success"=>1]);
    }
    exit();
}
// Actualiza datos pero recepciona datos de nombre, correo y una clave para realizar la actualización
if(isset($_GET["actualizar"])){
    
    $data = json_decode(file_get_contents("php://input"));

    $id=(isset($data->id))?$data->id:$_GET["actualizar"];
    $titulo=$data->titulo;
    $fecha=$data->date;
    $costo=$data->costo;
    $disponibles=$data->disponibles;
    
    $sqlEmpleaados = mysqli_query($conexionBD,"UPDATE contenido SET titulo='$titulo',fecha='$fecha',costo='$costo',disponibles='$disponibles' WHERE id='$id'");
    echo json_encode(["success"=>1]);
    exit();
}

if(isset($_GET["inscripcion"])){
    $data = json_decode(file_get_contents("php://input"));
    $nombre=$data->nombre;
    $correo=$data->correo;
    $razon=$data->razon;
    $comentario=$data->comentario;
    if(($nombre!="")&&($correo!="")&&($razon!="")&&($comentario!="")){
        $sqlEmpleaados = mysqli_query($conexionBD,"INSERT INTO inscripcion(nombre,correo,razon,comentario,fecha) VALUES('$nombre','$correo','$razon','$comentario',NOW()) ");
        echo json_encode(["success"=>1]);
    }
    exit();
}

if (isset($_GET["loginest"])){
    $data = json_decode(file_get_contents("php://input"));
    $usuario=$data->usuario;
    $contrasenia=$data->contrasenia;
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM estudiante WHERE usuario='$usuario' AND contrasenia='$contrasenia'");
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

if (isset($_GET["reservar"])){
    $data = json_decode(file_get_contents("php://input"));
    $id=$_GET["reservar"];

    if(($id!="")){
        $sqlEmpleaados = mysqli_query($conexionBD,"INSERT INTO reservas(user,producto,fecha) VALUES('1',
        '$id',NOW()) ");
        echo json_encode(["success"=>1]);
    }
    exit();
}

if (isset($_GET["loginprof"])){
    $data = json_decode(file_get_contents("php://input"));
    $correo=$data->correo;
    $contrasenia=$data->contrasenia;
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM profesor WHERE correo='$correo' AND contrasenia='$contrasenia'");
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

// Consulta todos los registros de la tabla empleados

$sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM contenido ");
if(mysqli_num_rows($sqlEmpleaados) > 0){
    $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
    echo json_encode($empleaados);
}
else{ echo json_encode([["success"=>0]]); }


?>
