//  ******************************************
//  **********  /assets/js/main.js  **********
//  ******************************************



$(document).ready(function () {


    console.warn('---------- Documento Cargado!!! ----- jQuery version:', $.fn.jquery, ' ----------', '\n');


    //  -----  Menú Secciones del Curso  -----
    $(".navbar__title").on('click', function () {
        $(".navbar__list").slideToggle();
    });

    
    function loadSimultaneousFade(container, url, scriptUrl) {
        
        // Cargar el contenido en el contenedor temporal
        $(container).load(url, function (response, status, xhr) {
            
            //$(this).fadeOut(1000); // Ocultar el contenido actual
            $.getScript(scriptUrl); // Cargar script asociado
                        
        });
    }

    // function loadSimultaneousFade(container, url, scriptUrl) {

    //     const containerId = container.replace("#", ""); // Eliminar la almohadilla
    //     console.log(containerId); // Salida: "renderHtml"
        
        
    //     // Crear un contenedor temporal para la transición simultánea
    //     const $tempContainer = $(`<main id='${containerId}' class='contenido' style='display:none;'></main>`).appendTo("body");

    //     // Cargar el contenido en el contenedor temporal
    //     $tempContainer.load(url, function (response, status, xhr) {
            
    //         //if (status === "error") $tempContainer.html("<p>Error al cargar el contenido</p>");
    //         //else $.getScript(scriptUrl); // Cargar script asociado
            
    //         // Realizar la transición simultánea
    //         $(container).fadeOut(1000); // Ocultar el contenido actual
    //         $tempContainer.fadeIn(1000, function () {
    //             // Reemplazar contenido y eliminar el contenedor temporal
    //             $(container).html($tempContainer.html()).fadeIn(1000); // Mostrar instantáneamente el nuevo contenido
    //             $tempContainer.remove(); // Eliminar el contenedor temporal
    //             $.getScript(scriptUrl); // Cargar script asociado
    //         });
    //     });
    // }

    // ---------- 01-primeros-pasos ----------
    $('#primerosPasos').on('click', function () {
        loadSimultaneousFade(
            "#renderHtml", 
            './01-primeros-pasos-introduccion/01-introduccion.html', 
            './01-primeros-pasos-introduccion/01-introduccion.js'
        );
    });


    // ---------- 02-selectores ----------
    $('#selectores').on('click', function () {
        loadSimultaneousFade(
            "#renderHtml", 
            './02-selectores/02-selectores.html', 
            './02-selectores/02-selectores.js'
        );
    });


    // ---------- 03-eventos ----------
    $('#eventos').on('click', function () {
        loadSimultaneousFade("#renderHtml", './03-eventos/03-eventos.html', './03-eventos/03-eventos.js');
    });


    // ---------- 04-funciones-y-efectos ----------
    $('#funcionesEfectos').on('click', function () {
        loadSimultaneousFade(
            "#renderHtml", 
            './04-funciones-y-efectos/04-funciones-efectos.html', 
            './04-funciones-y-efectos/04-funciones-efectos.js'
        );
    });


    // ---------- 05-jquery-html ----------
     $('#jqueryHtml').on('click', function () {
        loadSimultaneousFade(
            "#renderHtml", 
            './05-jquery-y-html/05-jquery-html.html', 
            './05-jquery-y-html/05-jquery-html.js'
        );
    });


    // ---------- 06-jquery-ajax ----------
    $('#jqueryAjax').on('click', function () {
        loadSimultaneousFade(
            "#renderHtml", 
            './06-jquery-y-ajax/06-jquery-ajax.html', 
            './06-jquery-y-ajax/06-jquery-ajax.js', 
        );
    });


    // ---------- 07-widgets ----------
    $('#widgets').on('click', function () {
        loadSimultaneousFade(
            "#renderHtml", 
            './07-widgets/07-widgets.html', 
            './07-widgets/07-widgets.js', 
        );
    });


     // ---------- 08-jQueryUI ----------
     $('#jqueryUI').on('click', function () {
        loadSimultaneousFade(
            "#renderHtml", 
            './08-jquery-ui/08-jquery-ui.html', 
            './08-jquery-ui/08-jquery-ui.js', 
        );
    });


    // ---------- 09-cierreCurso ----------
    $('#cierreCurso').on('click', function () {
        loadSimultaneousFade(
            "#renderHtml", 
            './09-cierre-curso/09-cierre-curso.html', 
            './09-cierre-curso/09-cierre-curso.js', 
        );
    });

});




// $(document).ready(function () {

//     console.warn('---------- Documento Cargado!!! ----- jQuery version:', $.fn.jquery, ' ----------', '\n');

//     //  -----  Menú Secciones del Curso  -----
//     $(".navbar__title").on('click', function () {
//         $(".navbar__list").slideToggle();
//     });

//     // Función genérica para cargar contenido con efecto fade
//     function loadWithFade(container, url, scriptUrl) {

//         //$(container).fadeOut(1000);

//         $(container).fadeOut(3000, function () { // Ocultar contenido existente

//             $(this).load(url, function (response, status, xhr) {
//                 if (status === "error") {
//                     $(this).html("<p>Error al cargar el contenido</p>").fadeIn(300);
//                 } else $(this).fadeIn(1000); // Mostrar contenido nuevo con transición

//             });
//         });

//         $.getScript(scriptUrl); // Cargar script asociado

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



