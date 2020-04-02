var romanNumbers = ["I", "V", "X", "L", "C", "D", "M"];
var romanEquivalents = [1, 5, 10, 50, 100, 500, 1000];

function arrays(numberString) {
  // var newArray = [];
  // numberString.forEach(function(digit) {
  //   newArray.push(digit.split());
  // });
  // return newArray;
  var numberArray = numberString.split();
  return numberArray;
}

function moreThan(string) {
  var numbers = parseInt(string);
  if(numbers >= 4000) {
    alert("You can not put in any numbers bigger than 3,999.");
    return false;
  } else if(numbers <= 3999) {
    console.log("The number is less than 4000");
    return true;
  } else {
    alert("something has gone wrong in moreThan");
  }
}

// front end logic
$(document).ready(function() {
  $("#user-input").submit(function(event) {
    event.preventDefault();

    var userInput = $("#number").val();
    console.log("user input type " + typeof(userInput));
    var splitInput = arrays(userInput);

    var upperLimit = moreThan(userInput);
    $("#result").text(splitInput);//***ADD FINAL VARIABLE***//
    console.log("split input type " + typeof(splitInput));
    console.log("split input " + splitInput);

    if(upperLimit === true) {
      $(".results").show();
    }
  });
});