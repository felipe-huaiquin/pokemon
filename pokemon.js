$(document).ready(function(){
    var output = "";
    for(var i = 1; i <=151; i++){
        var pkmn = i+".png";
        var srce = "http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/"+pkmn;
        output += "<figure class='image is-96x96 is-inline-block'><img src='"+srce+"'></figure>"
    }
    document.getElementById('pokemon').innerHTML = output
});

