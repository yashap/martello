$(document).ready(function(){
  // load default details for Foundational Programs
  var defaultButton1 = $("#_default-button-1");
  var defaultDetails1 = defaultButton1.data("feature");
  var defaultNode1 = $("<p class='lead program-details'>"+defaultDetails1+"</p>");
  defaultButton1.closest(".tall-col").append(defaultNode1);
  // load default details for Specialty Programs
  var defaultButton2 = $("#_default-button-2");
  var defaultDetails2 = defaultButton2.data("feature");
  var defaultNode2 = $("<p class='lead program-details'>"+defaultDetails2+"</p>");
  defaultButton2.closest(".tall-col").append(defaultNode2);
  // load default details for Field Trips
  var defaultButton3 = $("#_default-button-3");
  var defaultDetails3 = defaultButton2.data("feature");
  var defaultNode3 = $("<p class='lead program-details'>"+defaultDetails3+"</p>");
  defaultButton3.closest(".tall-col").append(defaultNode3);
  // on click behaviour for buttons
  $("._program-buttons").on("click", "button", function(){
    var thisButton = $(this);
    var thisCol = thisButton.closest(".tall-col");
    thisCol.children().last().remove();
    thisCol.find("button").removeClass("active");
    var programDetails = $(this).data("feature");
    var programNode = $("<p class='lead program-details'>"+programDetails+"</p>");
    thisCol.append(programNode);
  });
});
