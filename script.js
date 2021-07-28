var searchCityBtn = $(".searchButton");

var olCreated = false;

//DEPENDENCIES =================================================================

//DATA =========================================================================

//FUNCTIONS ====================================================================
function handleButton(cityReturn) {
    fetch 
}

//USER INTERACTIONS ============================================================

//INITIALIZATION ===============================================================

searchCityBtn.on("click", function (event) {
  event.preventDefault();
  //console.log("clicked");
  var cityInput = $("#cityInput").val();
  //console.log("cityInput: " + cityInput);
  handleButton(cityInput);
  console.log("hello");
});
