
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
      
*/

const display = document.getElementById("search").addEventListener('click', show);

const tablebody = document.getElementById("info"); 

function displayWeather(name, country, temp, des, lat, lon) {
  
  
  const key = "867603c87a267dde98d8a1a6c4c7ca23";
  const api2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`;

  fetch(api2)
  .then(response => response.json())
  .then(data => console.log(data.daily[0].temp.min, data.daily[0].temp.max))
  .catch(error => error = `<h2>City not found </h2>`)
   


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
  const api = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=imperial&appid=${key}`;
  


  fetch(api)
      .then(response => response.json())
      .then(data => displayWeather(data.name, data.sys.country, data.main.temp, data.weather[0].main, data.coord.lat, data.coord.lon ))
      .catch(error => alert("please type city!"))


}




    





  




          

