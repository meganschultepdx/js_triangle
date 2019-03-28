$(document).ready(function(){
  $("form#calculator").submit(function(event){
    var firstInput = parseInt($("#input1").val());
    var secondInput = parseInt($("#input2").val());
    var thirdInput = parseInt($("#input3").val());
    console.log(typeof firstInput);
    console.log(secondInput);
    console.log(thirdInput);

    if(firstInput === secondInput && secondInput === thirdInput ) {
      console.log("hi");
      $("#Equal").show();
    }


    event.preventDefault();
  });
})
