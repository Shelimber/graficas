$(function(){
    $("#btn_frm").click(function(){
        uso_ajax();
    })
});

function uso_ajax(){
    $.ajax({
        data: {
            'email':$("#email").val(),
            'clave': $("#clave").val()
        },
        type: 'POST',
        dataType: 'Json',
        url: 'app/models/mostrar_datos.php',
        cache: false,
        beforeSend: function() {
            $('#btm_frm').attr('disabled', true);
        },
        success: function(response) {
            
            if(response.success){
                swal('EXITO',response.email + '<br>' + response.clave,'success');
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
                $('#btm_frm').attr('disabled', false);
            }, 5000);
        }
    });
};