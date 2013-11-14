$(document).ready(function(){
  $("._program_buttons").on("click", "button", function(){
    $(this).closest(".row").find("._details").addClass("._hidden");
  });
});