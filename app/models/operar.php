<?php
    if($_POST["primer_numero"]!="" && $_POST["segundo_numero"]!=""){
        switch ($_POST["tipo_operacion"]) {
            case '1':
                $resultado=$_POST["primer_numero"]+$_POST["segundo_numero"];
                $response=array("success"=>true, 'resultado'=>"El resultado de la suma es: $resultado");
                break;

            case '2':
                $resultado=$_POST["primer_numero"]-$_POST["segundo_numero"];
                $response=array("success"=>true, 'resultado'=>"El resultado de la resta es: $resultado");
                break;

            case '3':
                $resultado=$_POST["primer_numero"]*$_POST["segundo_numero"];
                $response=array("success"=>true, 'resultado'=>"El resultado de la multiplicacion es: $resultado");
                break;

            case '4':
                $resultado=$_POST["primer_numero"]/$_POST["segundo_numero"];
                $response=array("success"=>true, 'resultado'=>"El resultado de la division es: $resultado");
                break;

            default:
                $response=array("success"=>false,'error'=>'El tipo de operacion no es valido');
                break;
        }
    }else{
        $response=array("success"=>false,'error'=>"Uno o ambos datos vienen vacios");
    }

    echo jason_encode($response);

?>