//  ***********************************************************
//  **********  /06-jquery-y-ajax/06-jquery-ajax.js  **********  
//  ***********************************************************  


$(document).ready(function () {

    console.warn('-----  06-jquery-ajax.js - cargado!!!  -----');


    //  -----  Cambiar el título de la página  -----
    document.title = '06 - jQuery y AJAX';


    //  -------------------------------------
    //  ----------  jQuery y AJAX  ----------
    //  -------------------------------------

    $("#img1").on('click', function() {
        $(".render-img").load("./06-jquery-y-ajax/textos/foto1.txt");
    });
    
    $("#img2").on('click', function() {
        $(".render-img").load("./06-jquery-y-ajax/textos/foto2.txt");
    });
    
    $("#txt1").on('click', function() {
        $(".render-img").load("./06-jquery-y-ajax/textos/texto1.txt");
    });

});
