//  *****************************************************
//  **********  /08-jquery-ui/08-jquery-ui.js  **********  
//  *****************************************************  


$(document).ready(function () {

    console.warn('-----  08-jquery-ui.js - cargado!!!  -----');


    //  -----  Cambiar el título de la página  -----
    document.title = '08 - jQuery UI';


    //  ---------------------------------
    //  ----------  jQuery UI  ----------
    //  ---------------------------------

    //  -----  Introducción  --  Calendar como ejemplo  -----
    $("#calendario").datepicker();


    //  -----  Draggable y Droppable  -----

    $("#contenedorDraggable")
        .css({
            width: 300,
            height: 300,
            backgroundColor: 'red'
        })
        .draggable();

    $("#contenedorDroppable")
        .css({
            width: 500,
            height: 500,
            backgroundColor: 'green'
        })
        .droppable({
            drop: function () {
                alert('Elemento soltado!!!');
                $(this).css('backgroundColor', 'yellow');
            },
            out: function () {
                alert('Elemento Fuera!!!');
                $(this).css('backgroundColor', 'green');
            }
        });



});
