$(document).ready(function() {
  $("form#shopping-list").submit(function(event) {

    var items = ["item1", "item2", "item3", "item4", "item5"];

    items.forEach(function(item) {
      var input=$("#" + item).val();
      $("#list-output ol").append("<li>" + input + "</li>");
    });


    //
    // function sortAndReturn(items, callback) {
    //   items.forEach(function(item) {
    //     var userInput = $("#" + item).val();
    //     userInput = userInput.sort();
    //     userInput = userInput.toUpperCase();
    //     alert(userInput);
    //   });

    //   items.forEach(function(blank) {
    //     var userInput = $("#" + blank).val();
    // }

    // var sortedItems = items.sort();
    //
    // alert(sortedItems);
    // sortedItems.forEach(function(sortedItem) {
    //   $("." + sortedItem).text(sortedItem);
    // });

    // var items = ["item1", "item2", "item3", "item4", "item5"];




    /*This returns the items, but doesn't alphabatize or capitalize the list*/
    // items.forEach(function(blank) {
    //   var userInput = $("#" + blank).val();
    //   $("." + blank).text(userInput);
    // });

    $("#list-output").show();
    event.preventDefault();
  });
});
