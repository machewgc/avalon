$(document).ready(function() {
  $("#hidden1").click(function() {
    $("#paragraph-hidden1").slideToggle();
    $("#hidden1").hide();
    $("#hidden1-right").show();
  });
  $("#hidden1-right").click(function() {
    $("#paragraph-hidden1").slideToggle();
    $("#hidden1").show();
    $("#hidden1-right").hide();
  });
  $("#hidden2").click(function() {
    $("#paragraph-hidden2").slideToggle();
  });
  $("#hidden3").click(function() {
    $("#paragraph-hidden3").slideToggle();
  });
  $("#hidden4").click(function() {
    $("#paragraph-hidden4").slideToggle();
  });
  $("#hidden5").click(function() {
    $("#paragraph-hidden5").slideToggle();
  });
  $("#hidden6").click(function() {
    $("#paragraph-hidden6").slideToggle();
  });
  $("#hidden7").click(function() {
    $("#paragraph-hidden7").slideToggle();
  });
  /*Added class to turn rows blue and back to gray again after hovering over merlin*/
    $(".merlin").hover(function() {
    $(".merlin").addClass("good");
  }, function() {
    $(".merlin").removeClass("good");
  });
  $("#player1").click(function() {
    $("#player1").toggleClass("selected");
  });
  $("#player2").click(function() {
    $("#player2").toggleClass("selected");
  });
  /*Disables options for removing Merlin for > 5 players*/
  $("#numberPlayers").change(function() {
    var numberPlayers = parseInt($("#numberPlayers").val());
    if (numberPlayers > 5) {
      $("#includeMerlin").prop("disabled",true);
      $("#includeMerlin").val("yes");
    }
    else {
      $("#includeMerlin").prop("disabled",false);
    }
  });
});
