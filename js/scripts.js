
// Front End
$(function(){
  $("form#survey").submit(function(event) {


    var daytime = parseInt($("#daytime").val());
    var location = parseInt($("#location").val());
    var food = parseInt($("#food").val());
    var transportation = parseInt($("input:radio[name=transportation]:checked").val());
    var lodging = parseInt($("input:radio[name=lodging]:checked").val());
    
    var destination = daytime + location + food + transportation + lodging;

    if (destination <= 17) {
      $("#hawaii").show();
    } else if (destination >= 18 && destination <= 23){
      $("#rockymountains").show();
    } else if (destination >= 24  && destination <= 28){
      $("#newyork").show();
    } else if (destination >= 29 && destination <=32){
      $("#losangeles").show();
    }

    event.preventDefault();



  });
});
