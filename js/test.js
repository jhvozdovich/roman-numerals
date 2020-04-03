var romanArray=[];


function isRomanNumber(number){
    if(number < 0){

    }
}

function converter(number){
  romanArray = [];
  if (number >= 1000) 
    return this.thousands(number);
  } else if (number >= 100) {
    return this.hundreds(number);
  } else if (number >= 10) {
    return this.tens(number);
  } else {
    return this.ones(number);
  }

   }

function thousand(number) {
  var remainder = number % 1000;
  var thousands = Math.floor(number / 1000);
  for(var index = 0; index < thousands; index += 1) {
    romanArray.push("M");
  }
  return this.hundreds(remainder);
}




$(document).ready(function() {

  $("#piglatin").submit(function(event) {
      event.preventDefault();

      var input = $("#sentence").val();
      if(input === ''){
        alert("Please enter a number")
        return;
    }
      var output = converter(parseIn(input));
      
      $("#output").text(output);
  }); 
});
