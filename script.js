$(".title-1").click(function() {
    $(".text-1").toggle();
    $(".envelope-closed").toggle();
    $(".envelope-open").toggle();
  });
  
  $(".title-2").click(function() {
    $(".text-2").toggle();
    $(".envelope-closed-2").toggle();
    $(".envelope-open-2").toggle();
  });
  
  $(".title-3").click(function() {
    $(".text-3").toggle();
    $(".envelope-closed-3").toggle();
    $(".envelope-open-3").toggle();
  });
  $("#personal-reason").click(function() {
    $("#email-button").html("Email personal request");
  });
  
  $("#professional-reason").click(function() {
    $("#email-button").html("Email professional request");
  });
  
  $("#email-body").keypress(function() {
    $("#email-button").removeAttr("disabled");
  });
  
  $("#email-button").click(function() {
    window.open(
    "mailto:katharine.capasso@gmail.com?subject=Hello&body=" +
    $("#email-body").val(),"_blank");
      });
  
  $("#are-you-human").click(function() {
    $("#are-you-human").removeClass("is-invalid");
  });
  $(".email-request").addClass("animated fadeIn slow");