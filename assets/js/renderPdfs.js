//  ***********************************************
//  **********  /asset/js/renderPdfs.js  **********
//  ***********************************************


$(".btnPdf").on("click", function () {
        
    //  -----  Ocultar todos los PDFs  -----
    $(".pdf").fadeOut(500);

    //  -----  Obtener el ID del botón y construir el ID del PDF correspondiente  -----
    const pdfId = $(this).attr("id").replace("btn", "");
    

    //  -----  Mostrar/Ocultar solo el PDF correspondiente  -----
    $(`#${pdfId}`).fadeToggle(500);
});


$(".btn-close-pdf").on('click', function() {
    $(".pdf").fadeOut(1000);
});