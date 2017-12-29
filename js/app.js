jQuery(document).ready(function () {

var typesRestaurant= Object.keys(data);
	
	
	$(".logo").animate({ "left": "+=28%" }, "slow");
	$('h4').animate({ 'font-size': 24, 'border-width': 5 }, 1800);
	$( ".main" ).hide();
	setTimeout(function () {
		$( ".splash" ).hide();
		$( ".main" ).show();
	}, 2000);



	// Funciones
	function listRestaurantTypes(){
		var Type='';
		var ObjectTypes=[];
		for (i=0;i<Object.keys(data).length;i++){
			tipo=Object.keys(data)[i];
			ObjectTypes.push({name:tipo});
		}

		return ObjectTypes;

	}

	function Gallery() {
		for (i = 0; i < data["Buffet"].length; i++) {
			$( ".gallery" ).append('<div class="col-xs-5 image_gallery"'+
			 'data-toggle="modal" data-target="#myModal">'+
			 '<span id="data-image" data-name="' + data["Chifa"][i]["name"]+ '"></span>'+
			 '<img  class="imggallery img-responsive" '+
			 'src=' + data["Chifa"][i]["image"]+ '> </div>');
			 
		}
	  }

	  Gallery();

	  $( ".image_gallery" ).mouseover(function() {
		$( this ).find( "span" ).text( "jenny ");
	  })
	  .mouseout(function() {
		$( this ).find( "span" ).text( " " );
	  });


	  $( ".modal-body" ).append('<div class="container">'+
	  '<div class="row"><div class="col-xs-10">'+		  
	  '<div class="embed-responsive embed-responsive-16by9">'+
				  '<iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31787.42301976514!2d-80.64935745684781!3d-5.195235063191625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srestaurants!5e0!3m2!1ses-419!2spe!4v1514129691073"'+
					  'width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'+

			  '</div></div></div></div>');

	
 
	// Busqueda Sensitiva por Tipo de Restaurant
		$("#demo-input-local").tokenInput(
			listRestaurantTypes()
			, {
			preventDuplicates: true,
			hintText: "Escribe un termino de busqueda",
		   noResultsText: "No se encntraron Resultados",
		   searchingText: "Buscando...",
   tokenLimit: 1
	   });




})

