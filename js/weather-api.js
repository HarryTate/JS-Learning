var city = "Peterborough";
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=1558cbf834a20e6b2d50ac0637172000", 
function(data) {
    console.log(data);

    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp) + "&#8451;";
    var weather = data.weather[0].main;
    console.log(temp);
    console.log(icon);
    // $(".temp").text(temp);
    document.getElementById('temp').innerHTML = temp;
    document.getElementById('weather').innerHTML = weather;
    $('.icon').attr("src", icon);
    }
);
