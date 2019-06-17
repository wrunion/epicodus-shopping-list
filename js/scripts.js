$(document).ready(function() {
  $("form#shopping-list").submit(function(event) {
    // var item1 = $("#item1").val();
    // var item2 = $("#item2").val();
    var items = ["item1", "item2", "item3", "item4", "item5"];

    items.forEach(function(blank) {
      var userInput = $("#" + blank).val().sort();
      $("." + blank).text(userInput);
    });
    // $(".item1").text(item1);
    // $(".item2").text(item2);

    $("#list-output").show();
    event.preventDefault();
  });
});
