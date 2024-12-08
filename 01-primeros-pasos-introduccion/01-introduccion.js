//  **************************************************************************
//  **********  /01-primeros-pasos-introduccion/01-introduccion.js  **********  
//  **************************************************************************  


$(document).ready(function () {


    console.warn('-----  01-introduccion.js - cargado!!!  -----');
    
    //  ---------------------------------------------
    //  ----------  Introducción a jQuery  ----------
    //  ---------------------------------------------
    
    $("p").click(function () {
        
        $(this)
            .css({
                color: "white",
                backgroundColor: "green",
                fontSize: "24px",
            })
            .text("He cambiado mi estilo");
    });

});
