import { triangle} from './triangle';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function(){
  $("form#calculator").submit(function(event){
    event.preventDefault();
    var firstInput = parseInt($("#input1").val());
    var secondInput = parseInt($("#input2").val());
    var thirdInput = parseInt($("#input3").val());
    console.log(typeof firstInput);
    console.log(secondInput);
    console.log(thirdInput);
    $("body").find("h4").hide();
  });
});
