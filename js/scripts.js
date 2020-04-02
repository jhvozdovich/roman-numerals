var romanNumbers = ["I", "V", "X", "L", "C", "D", "M"];
var romanEquivalents = [1, 5, 10, 50, 100, 500, 1000];




$(document).ready(function() {
  $("#user-input").submit(function(event) {
    event.preventDefault();

    
    $(".result").show();
  })
})