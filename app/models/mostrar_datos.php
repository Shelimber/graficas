<?php

    $email="El email ingresado es: $_POST[email]";
    $clave="La clave ingresada es: $_POST[clave]";

    if($_POST["email"]!="" && $_POST['clave']!=""){
        $response=array('success'=>true, 'email'=>$email, 'clave'=>$clave);
    }else{
        $response=array('success'=>false, 'error'=>'Uno de los parametros esta vacio');
    }

    echo json_encode($response);

?>