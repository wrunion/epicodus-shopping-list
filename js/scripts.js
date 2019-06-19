$(document).ready(function() {
  $("form#shopping-list").submit(function(event) {
    var item1 = $("#item1").val();
    var item2 = $("#item2").val();
    var item3 = $("#item3").val();
    var item4 = $("#item4").val();
    var item5 = $("#item5").val();

    var items = [item1, item2, item3, item4, item5];

    var sortedItems = items.sort();

    alert(sortedItems);
    // sortedItems.forEach(function(sortedItem) {
    //   $("." + sortedItem).text(sortedItem);
    // });

    // var items = ["item1", "item2", "item3", "item4", "item5"];



    // items.forEach(function(blank) {
    //   var userInput = $("#" + blank).val();
    //   return userInput.sort();
    //
    //   // $("." + blank).text(userInput);
    // });

    /*This returns the items, but doesn't alphabatize or capitalize the list*/
    // items.forEach(function(blank) {
    //   var userInput = $("#" + blank).val();
    //   $("." + blank).text(userInput);
    // });

    $("#list-output").show();
    event.preventDefault();
  });
});
