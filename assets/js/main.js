//  ******************************************
//  **********  /assets/js/main.js  **********
//  ******************************************



$(document).ready(function () {


    console.warn('---------- Documento Cargado!!! ----- jQuery version:', $.fn.jquery, ' ----------', '\n');

    //  -----  ocultar Menú Secciones  -----
    $('.aside .navbar__list').hide();

    //  -----  Renderizar Menú de Temas de jQuery UI  -----
    $('#renderJqueryUI').load('./assets/html/change-theme-jquery-ui-v2.html', function() {

        //  -----  ocultar Menú  -----
        $('#btn-container').hide();

        //  -----  Mostrar / Ocultar  --  Menú Temas de jQuery UI  -----
        $(".aside").on('click', '.navbar-themes__title', function () {
            $(".btn-container").slideToggle();
        });
    });
   
    
    //  -----  Mostrar / Ocultar  --  Menú Secciones del Curso  -----
    $(".aside").on('click', '.navbar__title' , function () {

        //  -----  Cambiar el pathname de la URL del navegador  -----
        history.pushState({}, '/', '/');

        document.title = 'Aprende jQuery de Forma Facil y Práctica - Udemy - Antonio Santos';

        $(".navbar__list").slideToggle();
    });


    



    function loadSimultaneousFade(container, url, scriptUrl, pathname) {
       


        $(container).load(url, function (response, status, xhr) {

            if (status === "success") {

                //  -----  Cambiar el pathname de la URL del navegador  -----
                //if (pathname) history.pushState({}, '', pathname);

                //console.log(location.pathname, ' - ', pathname);

                //  -----  Cargar el script asociado  -----
                if (scriptUrl) $.getScript(scriptUrl);

            } else console.error("Error al cargar el contenido:", status);

        });
    }



    // ---------- 01-primeros-pasos ----------
    $('#home').on('click', function () {
        loadSimultaneousFade(
            "#renderHtml",
            './assets/html/home.html',
            './01-primeros-pasos-introduccion/01-introduccion.js',
            '/01-introduccion'
        );
    });

    
    // ---------- 01-primeros-pasos ----------
    $('#primerosPasos').on('click', function () {
        loadSimultaneousFade(
            "#renderHtml",
            './01-primeros-pasos-introduccion/01-introduccion.html',
            './01-primeros-pasos-introduccion/01-introduccion.js',
            '/01-introduccion'
        );
    });


    // ---------- 02-selectores ----------
    $('#selectores').on('click', function () {
        loadSimultaneousFade(
            "#renderHtml",
            './02-selectores/02-selectores.html',
            './02-selectores/02-selectores.js',
            '/02-selectores'
        );
    });


    // ---------- 03-eventos ----------
    $('#eventos').on('click', function () {
        loadSimultaneousFade(
            "#renderHtml",
            './03-eventos/03-eventos.html',
            './03-eventos/03-eventos.js',
            '/03-eventos'
        );
    });


    // ---------- 04-funciones-y-efectos ----------
    $('#funcionesEfectos').on('click', function () {
        loadSimultaneousFade(
            "#renderHtml",
            './04-funciones-y-efectos/04-funciones-efectos.html',
            './04-funciones-y-efectos/04-funciones-efectos.js',
            '/04-funciones-y-efectos'
        );
    });


    // ---------- 05-jquery-html ----------
    $('#jqueryHtml').on('click', function () {
        loadSimultaneousFade(
            "#renderHtml",
            './05-jquery-y-html/05-jquery-html.html',
            './05-jquery-y-html/05-jquery-html.js',
            '/05-jquery-y-html'
        );
    });


    // ---------- 06-jquery-ajax ----------
    $('#jqueryAjax').on('click', function () {
        loadSimultaneousFade(
            "#renderHtml",
            './06-jquery-y-ajax/06-jquery-ajax.html',
            './06-jquery-y-ajax/06-jquery-ajax.js',
            '/06-jquery-y-ajax'
        );
    });


    // ---------- 07-widgets ----------
    $('#widgets').on('click', function () {
        loadSimultaneousFade(
            "#renderHtml",
            './07-widgets/07-widgets.html',
            './07-widgets/07-widgets.js',
            '/07-widgets'
        );
    });


    // ---------- 08-jQueryUI ----------
    $('#jqueryUI').on('click', function () {
        
        loadSimultaneousFade(
            "#renderHtml",
            './08-jquery-ui/08-jquery-ui.html',
            './08-jquery-ui/08-jquery-ui.js',
            '/08-jquery-ui'
        );
       
    });


    // ---------- 09-cierreCurso ----------
    $('#cierreCurso').on('click', function () {
        loadSimultaneousFade(
            "#renderHtml",
            './09-cierre-curso/09-cierre-curso.html',
            './09-cierre-curso/09-cierre-curso.js',
            '/09-cierre-curso'
        );
    });

});
