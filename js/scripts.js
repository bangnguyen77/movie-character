// front end logic
// $(document).ready(function() {
//   $("form#character").submit(function(event) {
//     event.preventDefault();
//     var nameInput = $("#name").val();
//     if nameInput= "red"
//
//     $("celeb").show();
//     $("character").hide();
//
//     $(".name").text(nameInput);
//   });
// });

$(document).ready(function() {
  $("form#character").submit(function(event) {
    var color = $("input#color").val();
    var height = $("input#height").val();
    var food = $("input#food").val();

    if (color === "red" && height <=160 && food === "hotdog") {
    var characterName = 'derek';}
    else if (color === "green" && height >=160 && food === "burger"){
      var characterName = 'hansel';
    }
    else {
      var characterName = 'mugata';
    }
    $("#name1").empty().append(characterName);
    $("#celeb").show();

    event.preventDefault();
  });
});
// // back end logic
//



// lines (28 sloc)  926 Bytes
// $(document).ready(function() {
//  $("form#survey").submit(function(event) {
//    event.preventDefault();
//    var nameInput = $("#name").val();
//    var colorInput = $("#color").val();
//    var food1Input = $("#food1").val();
//    var food2Input = $("#food2").val();
//    var food3Input = $("#food3").val();
//    var birthdayInput = $("#birthday").val();
//    var beverageInput = $("input:radio[name=beverage]:checked").val();
//    var langInput = $("#lang").val();
//
//    $("#results").show();
//    $("#survey").hide();
//
//    $(".name").text(nameInput);
//    $(".food1").text(food1Input);
//    $(".food2").text(food2Input);
//    $(".food3").text(food3Input);
//    $(".birthday").text(birthdayInput);
//    $(".beverage").text(beverageInput);
//    $(".lang").text(langInput);
//    // $(".color").css({
//    //     "background-color" : colorInput
//    // });
//    $(".colorButton").css({
//        "background-color" : colorInput
//    });
