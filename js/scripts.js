
// Front End
$(function(){
  $("form#survey").submit(function(event) {


    var daytime = parseInt($("#daytime").val());
    var location = parseInt($("#location").val());
    var food = parseInt($("#food").val());
    var transportation = parseInt($("#transportation").val());
    var lodging = parseInt($("#lodging").val());
    var nighttime = parseInt($("#nighttime").val());

    var destination = daytime + location + food;

    if (destination <= 5) {
      $("#hawaii").show();
    } else if (destination >= 6) {
      $("#rockymountains").show();
    }

    event.preventDefault();



  });
});
