/*const contadorVl = segCont =>{
    let tiempo = new Date(),
        contTiemp = (new Date(segCont) - tiempo + 1000) / 1000,
        contSeg = ('0' + Math.floor(contTiemp % 60)).slice(-2),
        contMin = ('0' + Math.floor(contTiemp / 60 % 60)).slice(-2),
        contHor = ('0' + Math.floor(contTiemp / 3600 % 24)).slice(-2);

    return{
        contTiemp,
        contSeg,
        contMin,
        contHor
    }
};

const cuentRegresiv = (segCont, elem) => {
    const imprimir = document.getElementById(elem);

    const actualizTempo = setInterval(() => {
        let tie = contadorVl(segCont);
        imprimir.innerHTML = '${tie.contHor}:${tie.contMin}:${tie.contSeg}';

        if(tie.contadorVl <= 1){
            clearInterval(actualizTempo);
            imprimir.innerHTML = "final";
        }
    }, 1000)
};

cuentRegresiv('Dic 30 2019 10:32:52 GMT-0500','contadorViaj');
*/

$(document).ready(function(){

    // --------- scroll ----------- //

		
	/*$("#inicio .fixHed .menuInc a").click(function(){
		var seccion = $(this).attr("href");
		$("body, html").animate({
			scrollTop: $(seccion).offset().top-60
		},800);
		return false;
    });
    
    // --- Capturar scroll --- //
		
	var inicio = $("#acerca_mi").offset().top-70;
	var habilidades = $("#habilidades").offset().top-70;
	/*var conocimientos = $("#conocimientos").offset().top-70;
	var portafolio = $("#portafolio").offset().top-70;
	var contactame = $("#contactame").offset().top-70;*/
		
	/*$(window).on("scroll", function(){
		var scroll1 = $(window).scrollTop();
			
		if(scroll1 >= inicio ){
			$(".btn_1").addClass("seleccionado");
		}else{
			$(".btn_1").removeClass("seleccionado");
		}
			
		if(scroll1 >= habilidades){
			$(".btn_2").addClass("seleccionado");
			$(".btn_1").removeClass("seleccionado");
		}else{
			$(".btn_2").removeClass("seleccionado");
        }
    }*/

   
    // ------ Formulario ------------ //
    var btnEnviar = $("#btnEnviar");



    btnEnviar.click(function(){

        var usuario = $("#usuario").val();
        var email = $("#email").val();
        var telef = $("#telefono").val();
        var comentario = $("#coment").val();

        var msjU = $("#msjErrorU");
        var msjE = $("#msjErrorE");
        var msjT = $("#msjErrorT");

        if( usuario.trim() == ""){
            msjU.html("* Llenar el campo.");
        }else{
            alert("gracias " + usuario);
            $("#usuario").val("");
            $("#msjErrorU").html("");
        }

        if( email.trim() == "" && email !== "@"){
            msjE.html("* Error. verifica, debe tener @.");
        }else{
            alert("su e-mail es: " + email);
            $("#email").val("");
            $("#msjErrorE").html("");
        }

        if( telef.trim() == ""){
            msjT.html("* Error, debe ser en numeros.");
        }else{
            alert("su numero es: " + telef);
            $("#telefono").val("");
            $("#msjErrorT").html("");
        }
    });



    /// ------------ Header - nav -------------- ///

   /* $(window).on('scroll', function(){
         let nosotros = document.getElementById('acercaNosotros');
         let menu = $(".fixHed");
         let posiServ = nosotros.getBoundingClientRect().top;
         console.log(posiServ);

         let tamanPantalla = window.innerHeight/2.5;

         if(nosotros < tamanPantalla){
            servicios.style.animate = "animacionPrueba 1s easy";
         }
    });*/
});