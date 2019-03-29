$(document).ready(function(){
  $("form#calculator").submit(function(event){
    var firstInput = parseInt($("#input1").val());
    var secondInput = parseInt($("#input2").val());
    var thirdInput = parseInt($("#input3").val());
    console.log(typeof firstInput);
    console.log(secondInput);
    console.log(thirdInput);
    $("body").find("h4").hide();

    if ( firstInput <= 0 || secondInput <= 0 || thirdInput <= 0 ) {
      $("#notTri").show();
    } else if ( firstInput === secondInput && secondInput === thirdInput ) {
      $("#equal").show();
    } else if ( firstInput === secondInput || secondInput === thirdInput ) {
      $("#isos").show();
    } else if ( firstInput !== secondInput && secondInput !== thirdInput ) {
      $("#scal").show();
    } else {
      $("#notTri").show();
    }
    event.preventDefault();
  });
})
