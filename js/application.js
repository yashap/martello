$(document).ready(function(){
  // Load the default content for each of the 3 program sections
  for (var i=1; i<4; i++) {
    var defaultButton = $("#_default-button-"+i);
    var defaultData = defaultButton.data("feature");
    var defaultNode = $("<section>"+defaultData+"</section>");
    defaultButton.closest(".tall-col").append(defaultNode);
  }
  // On-click behaviour for buttons
  $("._program-buttons").on("click", "button", function(){
    var thisButton = $(this);
    var thisCol = thisButton.closest(".tall-col");
    thisCol.children().last().remove();
    thisCol.find("button").removeClass("active");
    var programDetails = $(this).data("feature");
    var programNode = $("<section>"+programDetails+"</section>");
    thisCol.append(programNode);
    thisButton.addClass("active");
  });
});
