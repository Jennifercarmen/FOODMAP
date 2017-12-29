jQuery(document).ready(function () {

	var typeRestaurant = Object.keys(data)[3];

	$(".logo").animate({ "left": "+=28%" }, "slow");
	$('h4').animate({ 'font-size': 24, 'border-width': 5 }, 1800);
	$(".main").hide();
	setTimeout(function () {
		$(".splash").hide();
		$(".main").show();
	}, 2000);



	// Funciones
	function listRestaurantTypes() {
		var Type = '';
		var ObjectTypes = [];
		for (i = 0; i < Object.keys(data).length; i++) {
			Type = Object.keys(data)[i];
			ObjectTypes.push({ name: Type });
		}

		return ObjectTypes;

	}

	function Gallery(typeRestaurant) {
		for (i = 0; i < data[typeRestaurant].length; i++) {
			$(".gallery").append('<div class="col-xs-6 image_gallery"' +
				'data-toggle="modal" data-target="#myModal">' +
				'<p class="title" id="' + data[typeRestaurant][i]["id"] + '"></p>' +
				'<img  class="imggallery img-responsive" ' +
				'src=' + data[typeRestaurant][i]["image"] + '> </div>');
		$(".content-modal").append('<div class="modal fade" id="myModal" tabindex="-1">'+
		'<div class="modal-dialog" >'+
			'<div class="modal-content">'+
				'<div class="modal-body">'+
						'<div class="container">' +
						'<div class="row">'+
									'<div class="col-xs-12">' +
								'<h4>'+data[typeRestaurant][i]["name"]+' </h4>'+
								'<div class="row">'+
									'<div class="col-xs-10">' +
								'<div class="embed-responsive embed-responsive-16by9">' +
								'<iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31787.42301976514!2d-80.64935745684781!3d-5.195235063191625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srestaurants!5e0!3m2!1ses-419!2spe!4v1514129691073"' +
								'width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>' +
						
								'</div>'+
							'</div>'+
						'</div>'+
				'</div>'+
			'</div>'+
		'</div>'+
		'</div>'+
		'</div>');

		}
		$(".image_gallery").mouseover(function () {
			for (i = 0; i < data[typeRestaurant].length; i++) {
				$(this).find('#' + data[typeRestaurant][i]["id"]).text(data[typeRestaurant][i]["name"]);
			}
		});

		$(".image_gallery").mouseout(function () {
			$(this).find("p").text(" ");
		});


	}

	Gallery(typeRestaurant);

	// Busqueda Sensitiva por Tipo de Restaurant

	$(".token-input").tokenInput(
		listRestaurantTypes()
		, {
			theme: "bootstrap",
			preventDuplicates: true,
			hintText: "Escribe un termino de busqueda",
			noResultsText: "No se encntraron Resultados",
			searchingText: "Buscando...",
			tokenLimit: 1
		});

	$("button").click(function () {
		$('.gallery').empty();
		var inputvalue = $(".token-input").tokenInput("get");
		var typeRestaurant = inputvalue[0]["name"];
		console.log(data[typeRestaurant]);
		Gallery(typeRestaurant);

	});

})

