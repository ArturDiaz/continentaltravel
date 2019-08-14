$(document).ready(function(){

    // ---------- fixed al menu principal ---------- //

    let ubicacionPrinc = window.pageYOffset;
    window.onscroll = function(){
        let desplazamientoActual = window.pageYOffset;

        if(ubicacionPrinc <= 200){
            $('#fixHed').removeClass("animacion");
            $('#inicio').removeClass("animacionH");
        }else{
            $('#fixHed').addClass("animacion");
            $('#inicio').addClass("animacionH");
        }
        ubicacionPrinc = desplazamientoActual;
    }


})
// ---------- scroll por paginas ---------- //

var nosotros = $("#acercaNosotros").offset().top-150;
//var habilidades = $("#habilidades").offset().top-70;
    
$(window).on("scroll", function(){
    var scroll1 = $(window).scrollTop();
        
    if(scroll1 >= nosotros ){
        $(".btn_4").addClass("seleccionado");
    }else{
        $(".btn_4").removeClass("seleccionado");
    }
});