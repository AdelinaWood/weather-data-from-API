fetch('https://api.openweathermap.org/data/2.5/weather?id=703448&appid=70e1ed322b02acbc57d443dd91065f3e')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    document.querySelector('.package-name').innerHTML = data.name;
    document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector('.dusclaimer').textContent = data.weather[0]['description'];
    document.querySelector('.features li').innerHTML = '<img src="https://sinst.fwdcdn.com/img/weatherImg/m/d200.gif">';
  })
  .catch(function () {
      //
  });

  
 //https://sinst.fwdcdn.com/img/weatherImg/m/d200.gif