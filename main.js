$(function () {

  $('.middle_circle').click(function() {
    giveMeSunGiveMePokeMons(59.30,18.06);

  })

  function giveMeSunGiveMePokeMons(lat, lon) {
    console.log("den går")

    $.get("http://opendata-download-metfcst.smhi.se/api/category/pmp1.5g/version/1/geopoint/lat/"+lat+"/lon/"+lon+"/data.json/",


    function(data, textstatus, jqxhr) {

      var number = [Math.round(data.timeseries[0].t)];

      var pokemon = "http://pokeapi.co/api/v2/pokemon/" + number;



      $.get(pokemon, function (data, textstatus, jqxhr) {
        var pokemonName = data.name
        var type = data.types[0].type.name
        var PokeMonBild = "<img src =  " + data.sprites.front_default + ">"


        $('p').append(pokemonName + '<br/>' + ' Det är ' + number  + ' °c varmt ' + "Den är en PokeMon av typen " + type + '<br/>' + PokeMonBild  + '<br/>');

      });
    });
  }

  $('.middle_circleGbg').click(function() {
    giveMeSunGiveMePokeMons(57.72,11.97);
  })

});
