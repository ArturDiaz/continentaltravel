$(document).ready(function(){

    // ---------- fixed al menu principal ---------- //

    let ubicacionPrinc = window.pageYOffset;
    window.onscroll = function(){
        let desplazamientoActual = window.pageYOffset;

        if(ubicacionPrinc <= 200){
            $('#fixHed').removeClass("animacion");
            $('#inicio').removeClass("animacionH");
            //$('#btnHeaderVc').addClass("Mvacaciones");
        }else{
            $('#fixHed').addClass("animacion");
            $('#inicio').addClass("animacionH");  
            //$('#btnHeaderVc').removeClass("Mvacaciones");
        }
        ubicacionPrinc = desplazamientoActual;
    }

    // -------- Velocidad de scroll ------ //

    $("#inicio .fixHed .menuInc a").click(function(){
		var seccion = $(this).attr("href");
		$("body, html").animate({
			scrollTop: $(seccion).offset().top-120
		},800);
		return false;
    });
})
// ---------- scroll por paginas ---------- //

var inicio = $("#inicio").offset().top;
var servicios = $("#servicios").offset().top-80;
var nosotros = $("#acercaNosotros").offset().top-80;
var tecnologia = $("#tecnologia").offset().top-80;
var contactanos = $("#contactanos").offset().top-80;
    
$(window).on("scroll", function(){
    var scroll1 = $(window).scrollTop()+50;
        
    if(scroll1 >= inicio ){
        $(".btn_1").addClass("seleccionado");
    }else{
        $(".btn_1").removeClass("seleccionado");
    }

    if(scroll1 >= servicios ){
        $(".btn_2").addClass("seleccionado");
        $(".btn_1").removeClass("seleccionado");
    }else{
        $(".btn_2").removeClass("seleccionado");
    }

    if(scroll1 >= nosotros ){
        $(".btn_3").addClass("seleccionado");
        $(".btn_2").removeClass("seleccionado");
    }else{
        $(".btn_3").removeClass("seleccionado");
    }

    if(scroll1 >= tecnologia ){
        $(".btn_4").addClass("seleccionado");
        $(".btn_3").removeClass("seleccionado");
    }else{
        $(".btn_4").removeClass("seleccionado");
    }

    if(scroll1 >= contactanos ){
        $(".btn_5").addClass("seleccionado");
        $(".btn_4").removeClass("seleccionado");
    }else{
        $(".btn_5").removeClass("seleccionado");
    }
});