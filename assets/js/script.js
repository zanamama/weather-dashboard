var searchCityBtn = $(".searchButton");

//DEPENDENCIES =================================================================

//DATA =========================================================================

//FUNCTIONS ====================================================================
function handleButton(cityReturn) {
  console.log(cityReturn);
  var baseUrl = "http://api.openweathermap.org/data/2.5/weather";
  var city = "q=";
  var apiKey = "appid=1427bfa0299bdb7b05f5f94f888a131d";
  //for ferenheight
  var units = "units=imperial";
  //http://api.openweathermap.org/data/2.5/weather?q=Miami&units=imperial&appid=aa772c06902f60c4e5f5e833c0ce31f4
  var constructedUrl =
    baseUrl + "?" + city + cityReturn + "&" + units + "&" + apiKey;

  fetch(constructedUrl, {
    method: "GET", //GET is the default.
    credentials: "same-origin", // include, *same-origin, omit
    redirect: "follow", // manual, *follow, error
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.main.temp);
      console.log(data.weather[0].icon);
      var icon =
        "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
      var iconEl = $("<img>");
      iconEl.attr("src", icon);
      var h3El = $(".h3El");
      h3El.empty();
      h3El.append(iconEl);
      var temp = $(".temp");
      temp.text("Temp " + data.main.temp);
      var humidity = $(".humidity");
      humidity.text("Humidity " + data.main.humidity);
      var wind = $(".wind");
      wind.text("Wind " + data.wind.speed + " MPH");
      console.log(wind);
      //var uv = $(".uv");
      var cityMain = $(".cityMain");
      cityMain.text(city + " 07/28/21");
    });
}
//USER INTERACTIONS ============================================================

//INITIALIZATION ===============================================================

searchCityBtn.on("click", function (event) {
  event.preventDefault();
  console.log("clicked");
  var cityInput = $("#cityInput").val();
  console.log("cityInput: " + cityInput);
  handleButton(cityInput);
  console.log(cityInput);
});
