/* Globals */
var $form = $("form"),
    $input = $form.find("input"),
    $city = $(".now h1"),
    $temp = $(".now h2 span"),
    $week = $(".week"),
    $now = $(".now");

var tempRow = $('#weeklyWeather').html();
var compRow = _.template(tempRow);

function getDayName(timestamp) {
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          dayNum = (new Date(timestamp * 1000)).getDay();

    return weekdays[dayNum];
}

/* Form submit */
$form.submit(function () {
  // Get the city name, and create the data that we'll send via getJSON
  var city = $.trim($input.val()),
      data = {
        q: city,
        units: "imperial"
      };
  
  // Check to make sure a city has been entered
  if (city) {
    // Clear the old week
    $week.empty();
    
    // Get today's temp
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?callback=?", data, function (response, status) {
      // Check to make sure we have a valid response
      if (response.name) {
        var temp = Math.round(response.main.temp);
        $city.text(response.name);
        $temp.text(temp);
        
        // Remove the error
        $input.removeClass("error");
        
        // Show the header
        $now.show();
      } else {
        alert("Invalid location!");
        $input.addClass("error"); 
      }
    });
    
    // Get the week forecast
    data.cnt = 7;
    $.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?callback=?", data, function (response, status) {
      // Check to make sure we have a valid response
      if (response.list) {
        $.each(response.list, function () {
          var dayName = getDayName(this.dt),
              minTemp = Math.round(this.temp.min),
              maxTemp = Math.round(this.temp.max);
              
              
var rowData = {
  dayName: dayName,
  min: minTemp,
  max: maxTemp
};

$('.week').append(compRow(rowData));
           
           
        });
      }
    });
  }
  
  // Clear the input
  $input.val("").blur();
  
  return false;
});