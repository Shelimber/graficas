$(document).ready(function(){
    $("#total_compras").html("$5,000");
    $("#total_compras2").html("$12,000");
    $("#total_compras3").html("$20,000");

    $("#total_configuracion").html("80<small>%</small>");
    $("#total_errores").html("3<small>%</small>");
    $("#total_usuarios").html("29<small>%</small>");

    graficar();
});

function graficar() {
    var datos=[];
    var labels=[];
    $.ajax({
        data: {},
        type: 'POST',
        dataType: 'Json',
        url: 'app/models/traer_datos.php',
        cache: false,
        beforeSend: function() {
            //$('#btm_frm').attr('disabled', true);
        },
        success: function(response) {
            
            if(response.success){
                for (let i = 0; i < response.total; i++) {
                     datos.push(response.datos[i]);
                     labels.push(response.nombres[i])
                }
                var ctx = document.getElementById('grafica1').getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: '# de entregas de tareas',
                            data: datos,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });

                var  data={
                    labels: labels,
                    datasets: [{
                        label: '# de entregas',
                        data: datos,
                        "fill": false,
                        "borderColor": "rgb(75,192,192)",
                        "lineTension": 0.1
                    }]
                };

                var ctx2 = document.getElementById('grafica2').getContext('2d');
                var myLineChart = new Chart(ctx2, {
                    type: 'line',
                    data: data,
                    options: {}
                });

            }else{
                swal('ERROR',response.error,'error');
            }
        },
        error: function() {
            swal('ERROR','Error de ejecucion del Ajax','error');
            //alert('Error de ejecucion del Ajax');
        },
        complete: function() {
           /* setTimeout(() => {
                $('#btm_frm').attr('disabled', false);
            }, 5000);
        */
        }
    });
}


 
