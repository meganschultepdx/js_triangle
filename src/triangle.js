export function triangle(firstInput, secondInput, thirdInput) {


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
}
