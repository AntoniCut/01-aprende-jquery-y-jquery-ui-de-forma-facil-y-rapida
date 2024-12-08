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

    //  ----------  03-eventos  ----------
    $('#eventos').on('click', function () {
        $("#renderHtml").load('./03-eventos/03-eventos.html');
        $.getScript('./03-eventos/03-eventos.js');
    });

});


// $(document).ready(function () {

//     console.warn('---------- Documento Cargado!!! ----- jQuery version:', $.fn.jquery, ' ----------', '\n');

//     function loadSimultaneousFade(container, url, scriptUrl) {
//         // Crear un contenedor temporal para la transición simultánea
//         const tempContainer = $("<div style='display:none;'></div>").appendTo("body");

//         // Cargar el contenido en el contenedor temporal
//         tempContainer.load(url, function (response, status, xhr) {
//             if (status === "error") {
//                 tempContainer.html("<p>Error al cargar el contenido</p>");
//             } else {
//                 $.getScript(scriptUrl); // Cargar script asociado
//             }

//             // Realizar la transición simultánea
//             $(container).fadeOut(1000); // Ocultar el contenido actual
//             tempContainer.fadeIn(1000, function () {
//                 // Reemplazar contenido y eliminar el contenedor temporal
//                 $(container).html(tempContainer.html()).fadeIn(1000); // Mostrar instantáneamente el nuevo contenido
//                 tempContainer.remove(); // Eliminar el contenedor temporal
//             });
//         });
//     }

//     // ---------- 01-primeros-pasos ----------
//     $('#primerosPasos').on('click', function () {
//         loadSimultaneousFade("#renderHtml", './01-primeros-pasos-introduccion/01-introduccion.html', './01-primeros-pasos-introduccion/01-introduccion.js');
//     });

//     // ---------- 02-selectores ----------
//     $('#selectores').on('click', function () {
//         loadSimultaneousFade("#renderHtml", './02-selectores/02-selectores.html', './02-selectores/02-selectores.js');
//     });

//     // ---------- 03-eventos ----------
//     $('#eventos').on('click', function () {
//         loadSimultaneousFade("#renderHtml", './03-eventos/03-eventos.html', './03-eventos/03-eventos.js');
//     });

// });


// $(document).ready(function () {

//     console.warn('---------- Documento Cargado!!! ----- jQuery version:', $.fn.jquery, ' ----------', '\n');

//     // Función genérica para cargar contenido con efecto fade
//     function loadWithFade(container, url, scriptUrl) {
        
//         $(container)
            
//             .fadeOut(1000, function () { // Ocultar contenido existente
                
//                 $(this).load(url, function (response, status, xhr) {
//                     if (status === "error") {
//                         $(this).html("<p>Error al cargar el contenido</p>").fadeIn(300);
//                     } else {
//                         $.getScript(scriptUrl); // Cargar script asociado
//                         $(this).fadeIn(1000); // Mostrar contenido nuevo con transición
//                     }
//                 });
//             });
//     }

//     // ---------- 01-primeros-pasos ----------
//     $('#primerosPasos').on('click', function () {
//         loadWithFade("#renderHtml", './01-primeros-pasos-introduccion/01-introduccion.html', './01-primeros-pasos-introduccion/01-introduccion.js');
//     });

//     // ---------- 02-selectores ----------
//     $('#selectores').on('click', function () {
//         loadWithFade("#renderHtml", './02-selectores/02-selectores.html', './02-selectores/02-selectores.js');
//     });

//     // ---------- 03-eventos ----------
//     $('#eventos').on('click', function () {
//         loadWithFade("#renderHtml", './03-eventos/03-eventos.html', './03-eventos/03-eventos.js');
//     });

// });



