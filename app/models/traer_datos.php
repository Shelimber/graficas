<?php
    $nombres=array('Enero','Febrero','Marzo','Abril');
    $datos=array(2000,1500,450,2051);

    $response=array(
        'success'=>true,
        'total'=>COUNT($nombres),
        'nombres'=>$nombres,
        'datos'=>$datos
    );

    echo  json_encode($response);
?>