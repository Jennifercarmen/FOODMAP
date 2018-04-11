jQuery(document).ready(function() {
  initMap();
  var typeRestaurant = Object.keys(data)[3];
  // Funciones
  function listRestaurantTypes() {
    var Type = '';
    var ObjectTypes = [];
    for (i = 0; i < Object.keys(data).length; i++) {
      Type = Object.keys(data)[i];
      ObjectTypes.push({
        name: Type
      });
    }
    return ObjectTypes;
  }

  function Gallery(typeRestaurant) {
    for (i = 0; i < data[typeRestaurant].length; i++) {
      $('.gallery').append('<div class="col-xs-6 col-md-4 image_gallery"' +
        'data-toggle="modal" data-target="#myModal' + data[typeRestaurant][i]['id'] + '">' +
        '<p class="title" id="' + data[typeRestaurant][i]['id'] + '"></p>' +
        '<img  class="imggallery img-responsive" ' +
        'src=' + data[typeRestaurant][i]['image'] + '> </div>');
      $('.content-modal').append('<div class="modal fade" id="myModal' + data[typeRestaurant][i]['id'] + '" tabindex="-1">' +
        '<div class="modal-dialog" >' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
        '<h4 class="modal-title bold" id="myModalLabel">' + data[typeRestaurant][i]['name'] + ' </h4>' +
        '</div>' +
        '<div class="modal-body">' +

        '<div class="container">' +
        '<div class="row">' +
        '<div class="col-xs-12 col-md-12">' +
        ' <img class="img-responsive center imgmodal" src="../assets/images/plate.png" alt="Hamburguesa">' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<div class="container">' +
        '<div class="row">' +
        '<div class="col-xs-12 col-md-12 bold">' +
        'Direcciòn' +
        '</div>' +
        '<div class="col-xs-12 col-md-12">' +
        data[typeRestaurant][i]['Adress'] +
        '</div>' +
        '</div>' +
        '</div>' +

        '<div class="container">' +
        '<div class="row">' +
        '<div class="col-xs-12 col-md-12 bold">' +
        'Telefono' +
        '</div>' +
        '<div class="col-xs-12 col-md-12">' +
        data[typeRestaurant][i]['Telefono'] +
        '</div>' +
        '</div>' +

        '<div class="row">' +
        '<div class="col-xs-12 col-md-12">' +
        data[typeRestaurant][i]['Descripcion'] +
        '</div>' +
        '</div>' +

        '<div class="row">' +
        '<div class="col-xs-12 col-md-12">' +
        data[typeRestaurant][i]['Apertura'] +
        '</div>' +
        '</div><br>' +

        '<div class="container">' +
        '<div class="row">' +
        '<div class="col-xs-12 col-md-12">' +
        '<button type="button" class="btn btn-primary" id="send">Pedir Ahora</button>' +
        '</div>' +
        '</div>' +
        '</div>' +


        '</div>' +
        '</div>');
    }
    $('.image_gallery').mouseover(function() {
      for (i = 0; i < data[typeRestaurant].length; i++) {
        $(this).find('#' + data[typeRestaurant][i]['id']).text(data[typeRestaurant][i]['name']);
      }
    });

    $('.image_gallery').mouseout(function() {
      $(this).find('p').text('');
    });
  }

  Gallery(typeRestaurant);

  // Busqueda Sensitiva por Tipo de Restaurant

  $('.token-input').tokenInput(
    listRestaurantTypes(), {
      theme: 'bootstrap',
      preventDuplicates: true,
      hintText: 'Escribe un termino de busqueda',
      noResultsText: 'No se encntraron Resultados',
      searchingText: 'Buscando...',
      tokenLimit: 1
    });
  if ($('.token-input').tokenInput('get').length === 0) {
    $('ul').addClass('input-ul');
  }
  $('ul').on('keyup', function() {
    $('ul').removeClass('input-ul');
  });
  $('#buscar').click(function() {
    var inputvalue = $('.token-input').tokenInput('get');
    if (inputvalue.length === 0) {
      alert('ingrese un valor');
    } else {
      $('.gallery').empty();
      var typeRestaurant = inputvalue[0]['name'];
      console.log(data[typeRestaurant]);
      Gallery(typeRestaurant);
    }
  });
  $('#send').click(function() {
    alert('Su pedido se ha registrado');
    window.location.href = 'views/main.html';
  });
  $('#send').click(function() {
    alert('Su pedido se ha registrado');
    window.location.href = '../views/main.html';
  });
});