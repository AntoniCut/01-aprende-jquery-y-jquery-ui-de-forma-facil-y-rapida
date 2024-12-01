//  **************************************************************************
//  **********  /01-primeros-pasos-introduccion/01-introduccion.js  **********  
//  **************************************************************************  


$("p").click(function () {
    $(this)
        .css({
            color: "white",
            backgroundColor: "green",
            fontSize: "24px",
        })
        .text("He cambiado mi estilo");
});




