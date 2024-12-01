//  ******************************************
//  **********  /assets/js/main.js  **********
//  ******************************************


$(document).ready(function () {

    console.warn('----------  Documento Cargado!!!  ----- jQuery version:', $.fn.jquery, ' ----------', '\n');
    
    //  ----------  01-primeros-pasos  ----------
    $('#primerosPasos').on('click', function () {
        
        $("#renderHtml").load('./01-primeros-pasos-introduccion/01-introduccion.html');
        $.getScript('./01-primeros-pasos-introduccion/01-introduccion.js');
    });


    //  ----------  02-selectores  ----------
    $('#selectores').on('click', function () {
        $("#renderHtml").load('./02-selectores/02-selectores.html');
        $.getScript('./02-selectores/02-selectores.js');
    });

});
