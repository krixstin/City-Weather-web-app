function getWeather(){

    //city
    var city=document.querySelector("#inputCity").value;
    console.log("city entered is " +city);
    
    var cel= document.getElementById("checkMetric");
    var fah=document.getElementById("checkImperial")
    //unit 
    unit= ""

    if (cel.checked==true && fah.checked==true){
        unit="metric";
        unitSpeed=" meter/sec";
        unitTemp=" °C";
        document.getElementById("error").innerText= "Please uncheck °C if you wish to see in °F";
    }else if (cel.checked ==true){
        unit="metric";

        unitSpeed=" meter/sec";
        unitTemp=" °C";
    }else if (fah.checked== true){
        unit="imperial";
        unitSpeed=" miles/hour";
        unitTemp=" °F"
    }else{
        unit ="metric" ;
        unitSpeed=" meter/sec";
        unitTemp=" °C";
        document.getElementById("error").innerText = "Temperature is in °C by default";
    }

    console.log(unit);
    api_url="http://api.openweathermap.org/data/2.5/weather?q=" + city+"&appid=34f9a84511794b1391a0e6e35c72c281&units="+unit;
            console.log(api_url);

    getapi(api_url);
    
    async function getapi(url){ 
        
        const response =await fetch(url); //store fetch data in "response"

        var data = await response.json(); //store "response" in form of Json
        console.log(data);

        // console.log(doc[-ument.querySelector("#inputCity").value);
        console.log("data is shown");    
            
        var temp = data.main.temp;
        var feels_like= data.main["feels_like"];
        var min= data.main["temp_min"];
        var max= data.main["temp_max"];
        var short_desc= data.weather.main;
        var desc= data.weather[0]["description"];
        
        document.getElementById('city').innerText= city.toUpperCase();

        document.getElementById("temp").textContent = temp + unitTemp;
        document.getElementById("feels_like").textContent = "Feels like " +feels_like + unitTemp;
        

        document.getElementById("min").textContent ="Lowest " +min + unitTemp;
        document.getElementById("max").textContent = "Highest "+ max + unitTemp;
        document.getElementById("desc").textContent = desc ;

        document.getElementById("humidity").textContent = "Humidity " +data.main.humidity+ "%" ;
        document.getElementById("wind_speed").textContent = "Wind Speed "+data.wind.speed + unitSpeed;
        document.getElementById("wind_deg").textContent = "Wind Direction "+ data.wind.deg +unitTemp ;
        document.getElementById("cloud").textContent = "Cloudness " + data.clouds.all+ "%" ;
        document.getElementById("pressure").textContent = "Pressure " + data.main.pressure+ " hPa" ;
        
    }
    
}


// function draw(){
//     background(0);
//     if (weather){
//         var temp = weather.main.temp;
//         var temp_min = weahter.main.temp_min;
//         var temp_max = weather.main.temp_max;
//         var humidity = weather.main.humidity;
        
//         ellipse(100, 100, temp, temp );
//         ellipse(400, 100,humidity, humidity );
//         ellipse(100, 300, temp_min, temp_min );
//         ellipse(400, 300, temp_max, temp_max );
//     }
// }

// var output= " ";
// function list(){
//     for (key in weather.main){
//         if(weather.main.hasOwnProperty(key)){ //has key
//             output += '<li>' + '<a href = "'
// + weather.main[key]+ key +"</a>" + '</li>';        }

//     }
// }

