

//testing code trial and error.//
/*
api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={dc729ba0093e651945384e8d23f8314b}

https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&hourly={hourly}&daily={daily}&appid={dc729ba0093e651945384e8d23f8314b}


const dataReq = new XMLHttpRequest();

//const callAp = dc729ba0093e651945384e8d23f8314b;


   var tablebody = document.getElementById('table-body');
  
       var tr = document.createElement('tr');
       tr.innerHTML = '<td>' + '<h3> City </h3>' + data.name + '</td>' + 
                      '<td>' + '<h3> Country </h3>' + data.sys.country + '</td>' + 
                      '<td>' + '<h3> Temp </h3>' + data.main.temp + '</td>' + 
                      '<td>' + '<h3> Description </h3>' + data.weather[0].description + '</td>' ;
                      
       tablebody.appendChild(tr); 
       
     

  
    
    console.log(data.name);
    console.log(data.sys.country);
    console.log(data.main.temp);
    console.log(data.weather[0].description);


    console.log(data.main.temp_min);
    console.log(data.main.temp_max);
    console.log(data.weather[0].icon);

     var tablebody = document.getElementById('info');
              
                    var tr = document.createElement('tr');
                    tr.innerHTML = '<td>' + '<h3> City </h3>' + data.name + '</td>' + 
                                    '<td>' + '<h3> Country </h3>' + data.sys.country + '</td>' + 
                                    '<td>' + '<h3> Temp </h3>' + data.main.temp + '</td>' + 
                                    '<td>' + '<h3> Description </h3>' + data.weather[0].description + '</td>' ;
                                    
                    tablebody.appendChild(tr); 
                      });
                      fetch('http://api.openweathermap.org/data/2.5/weather?q=' + text + '&units=imperial' + '&appid=867603c87a267dde98d8a1a6c4c7ca23')

fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&units=imperial&appid=867603c87a267dde98d8a1a6c4c7ca23')
                .then(response => response.json())
                .then(data => console.log(data.daily, data.daily[0].temp.min, data.daily[0].temp.max, data.daily[2].weather[0].icon));







      const tablebody = document.getElementById("info");      
      const key = "867603c87a267dde98d8a1a6c4c7ca23";
      const cityname = document.getElementById("city").value;
    
      const api = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=imperial&appid=${key}`;

      function validate() {
        let text = document.getElementById("city").value;
        if (text == "") {
          alert("Please type city!");
          return false;
        }
      }
      

      function displayWeather(name, country, des) {
        const table = `<table >
                              <tr>
                                <th>Name</th>
                                <th>Country</th>
                                <th>Description</th>
                              </tr>
                              <tr>
                                <td>${name}</td>
                                <td>${country}</td>
                                <td>${des}</td>
                              </tr>
                        </table>`;
        tablebody.innerHTML = table;

      }

 

  function show(){

      if(cityname!= ""){
    
       fetch(api)
      .then(Response => Response.json())
      .then(data => displayWeather(data.name, data.sys.country, data.weather[0].description ));

      }else{
        validate();
      }

  }

  const key = "867603c87a267dde98d8a1a6c4c7ca23";
  const api2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`;

  fetch(api2)
  .then(response => response.json())
  .then(data => console.log(data.daily[0].temp.min, data.daily[0].temp.max))
  .catch(error => error = `<h2>City not found </h2>`)
   

  displayWeather(data.name, data.sys.country, data.main.temp, data.weather[0].main, data.coord.lat, data.coord.lon )
      

//first api call works second needs work

const display = document.getElementById("search").addEventListener('click', show);

const tablebody = document.getElementById("info"); 

function displayWeather(name, country, temp, des) {
  const table = `<table >
                        <tr>
                          <th>Name</th>
                          <th>Country</th>
                          <th>Temp</th>
                          <th>Description</th>
                        </tr>
                        <tr>
                          <td>${name}</td>
                          <td>${country}</td>{
                          <td>${temp}</td>
                          <td>${des}</td>
                        </tr>
                  </table>`;
  tablebody.innerHTML = table;

}




function show() {
  const key = "867603c87a267dde98d8a1a6c4c7ca23";
  const cityname = document.getElementById("city").value;
  const api = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=imperial&appid=${key}`;
  
  
  fetch(api)
      .then(response => response.json())
      .then(data => {
            let lon = data.coord.lon;
            let lat = data.coord.lat;
            displayWeather(data.name, data.sys.country, data.main.temp, data.weather[0].main);

            const api2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`;

            fetch(api2)
            .then(response => response.json())
            .then(data => {
              let daily = data.daily;
              let sevenDayWeather = daily.map((item, index, array)=>{
                let max = Math.round(item.temp.max);
                let min = Math.round(item.temp.min);
                let day = index;
                let icon = item.weather[0].icon;

                let table2 = document.getElementById("info").innerHTML += `<table >
                                        <tr>
                                          <th>day</th>
                                          <th>min</th>
                                          <th>max</th>
                                          <th>Icon</th>
                                          
                                        </tr>
                                        <tr>
                                          <td>${day}</td>
                                          <td>${min}</td>{
                                          <td>${max}</td>
                                          <td>${icon}</td>
                                        
                                        </tr>
                                </table>`; 
                return table2;
              
                
              })
               
            })
            
            
      })
      .catch(error => alert("please type city!"))
      .else(error=> alert("citty not found")).


}
*/

const display = document.getElementById("search").addEventListener('click', show);

const tablebody = document.getElementById("info");

//call first table and displays temp weather and description....

function displayWeather(name, country, temp, des) {
  const table = `<table >
                        <tr>
                          <th>Name</th>
                          <th>Country</th>
                          <th>Temp</th>
                          <th>Description</th>
                        </tr>
                        <tr>
                          <td>${name}</td>
                          <td>${country}</td>
                          <td>${temp}</td>
                          <td>${des}</td>
                        </tr>
                  </table>`;
  tablebody.innerHTML = table;

}
    
function show() {
  const key = "867603c87a267dde98d8a1a6c4c7ca23";
  const cityname = document.getElementById("city").value;
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=imperial&appid=${key}`;

///first call to the api

  fetch(api)
  .then(response => response.json())
  .then(data => {
        let lon = data.coord.lon;
        let lat = data.coord.lat;
        //displayweather makes the first api call and displays the name, country and weather.
        displayWeather(data.name, data.sys.country, Math.round(data.main.temp), data.weather[0].main);


      ///second call to the api``~  
        const api2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`;

            fetch(api2)
            .then(response => response.json())
            .then(data => {
              let daily = data.daily;
              let sevenDayWeather = daily.map((item, index, array)=>{
                let max = Math.round(item.temp.max);
                let min = Math.round(item.temp.min);
                let day = index;
                let icon = item.weather[0].icon;

                let table2 = document.getElementById("info").innerHTML += `<table >
                                        <tr>
                                          <th>day</th>
                                          <th>min</th>
                                          <th>max</th>
                                          <th>Icon</th>
                                          
                                        </tr>
                                        <tr>
                                          <td>${day}</td>
                                          <td>${min}</td>
                                          <td>${max}</td>
                                          <td>${icon}</td>
                                        
                                        </tr>
                                </table>`; 
                return table2;
              
                
              })
               
            })
            
            
      })
      .catch(error => alert("please type city!"))
     
}




  




          

