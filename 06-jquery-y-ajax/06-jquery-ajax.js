//  ***********************************************************
//  **********  /06-jquery-y-ajax/06-jquery-ajax.js  **********  
//  ***********************************************************  


$(document).ready(function () {

    console.warn('-----  06-jquery-ajax.js - cargado!!!  -----');

    //  -------------------------------------
    //  ----------  jQuery y AJAX  ----------
    //  -------------------------------------

    
    //  -----  Método load()  -----
    $("#img1").on('click', function() {
        $(".render-img").load("./06-jquery-y-ajax/textos/foto1.txt");
    });
    
    $("#img2").on('click', function() {
        $(".render-img").load("./06-jquery-y-ajax/textos/foto2.txt");
    });
    
    $("#txt1").on('click', function() {
        $(".render-img").load("./06-jquery-y-ajax/textos/texto1.txt");
    });

    
    //  -----  Método get() y post()  -----
    $("#enviar1").on('click', function() {
        
        $.post("./06-jquery-y-ajax/enviar1.php", $("#form1").serialize(), function(datos) {
            $(".show-info1").html(`<h2> ${datos} </h2>`);
        });

	    return false;
    });



    //  -----  Método ajax()  -----
    $("#enviar2").on('click', function() {
        
        const datos = $("#form2").serialize();


        $.ajax({
            async: true,
            type: "post",
            dataType: "html",
            contentType: "application/x-www-form-urlencoded",
            
            url: "./06-jquery-y-ajax/enviar2.php",
            data: datos,
            
            beforeSend: function() {
                $(".show-info2").html("<h2> Cargando Información ..... </h2>");
            },
            
            success: function(datos) {
                $(".show-info2").html(`<h2> ${datos}  </h2>`);
            },
            
            timeout: 5000,
            
            error: function() {
                $(".show-info2").html("<h2> Conexion Erronea ..... </h2>");
            }
                    
        });

	    return false;
        
    });


    //  -----  Plugin de AJAX  -----
    $("#enviar3").on('click', function() {

        $("#form3").ajaxForm(function() {
            alert('plugin')
            $(".show-info3").html(`<h2> ${datos} </h2>`);    
        })
                    
    });
        

});
