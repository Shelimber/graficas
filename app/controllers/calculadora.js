$(function (){
    $("#btn_operacion").click(function() {
        operar_numeros();
    });
    $("input, select").focus(function() {
        $("#respuesta").hide();
    })
});

function operar_numeros(){
    $.ajax({
        data: {
            primer_numero: $("#primer_numero").val(),
            segundo_numero: $("#segundo_numero").val(),
            tipo_operacion: $("#tipo_operacion").val()
        },
        type: 'POST',
        dataType: 'Json',
        url: 'app/models/operar.php',
        cache: false,
        beforeSend: function() {
            $("#btn_operacion").attr('disabled', true);
        },
        success: function(response) {
            
            if(response.success){
                $("#respuesta").show();
                $("#respuesta").html(response.resultado);
            }else{
                swal('ERROR',response.error,'error');
            }
        },
        error: function() {
            swal('ERROR','Error de ejecucion del Ajax','error');
            //alert('Error de ejecucion del Ajax');
        },
        complete: function() {
            setTimeout(() => {
                $("#btn_operacion").attr('disabled', false);
            }, 5000);
        }
    });
}