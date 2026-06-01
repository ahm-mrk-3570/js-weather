const weather = fetch('https://api.openweathermap.org/data/2.5/weather?q=Tehran&appid=0edb791cbd6d5ee53debf897d40a8d84');
const weatherApi = fetch('https://api.weatherapi.com/v1/forecast.json?key=d52bfd1a105b4aef9a0192118253009&q=Tehran&days=1');
const input = document.querySelector('.js-input-search');

beforeSearch();


document.querySelector('.js-search-button')
  .addEventListener('click', () => {
    if (input.value === "") {
      alert('please enter a vaild value...');
      beforeSearch();
    } else {
      afterSearch();
    }
  });

function beforeSearch() {
  // const weather = fetch('https://api.openweathermap.org/data/2.5/weather?q=Tehran&appid=0edb791cbd6d5ee53debf897d40a8d84');
  // const weatherApi = fetch('https://api.weatherapi.com/v1/forecast.json?key=d52bfd1a105b4aef9a0192118253009&q=Tehran&days=1');

  weatherApi.then(res => {
    return res.json();
  }).then((data) => {
    const hourly_day13 = JSON.parse(data.forecast.forecastday[0].hour[13].temp_c);
    const hourly_day15 = JSON.parse(data.forecast.forecastday[0].hour[15].temp_c);
    const hourly_day17 = JSON.parse(data.forecast.forecastday[0].hour[17].temp_c);
    const image_src = data.forecast.forecastday[0].day.condition.icon;
    document.querySelector('.js-icon').innerHTML = `<img src="https:${image_src}" width="300" alt="">`;

    document.querySelector('.js-box-data-hourly').innerHTML = `
          <div class="box-hourly-data">
            <div class="cloud-status-icon">
              <img src="https:${data.forecast.forecastday[0].hour[13].condition.icon}" width="100" alt="">
            </div>
            <div class="time-status">
              <h2>13 : 00</h2>
            </div>
            <div class="degerous-status">
              <h2>${hourly_day13}°C</h2>
            </div>
          </div>
          <div class="box-hourly-data">
            <div class="cloud-status-icon">
              <img src="https:${data.forecast.forecastday[0].hour[15].condition.icon}" width="100" alt="">
            </div>
            <div class="time-status">
              <h2>15 : 00</h2>
            </div>
            <div class="degerous-status">
              <h2>${hourly_day15}°C</h2>
            </div>
          </div>
          <div class="box-hourly-data">
            <div class="cloud-status-icon">
              <img src="https:${data.forecast.forecastday[0].hour[17].condition.icon}" width="100" alt="">
            </div>
            <div class="time-status">
              <h2>17 : 00</h2>
            </div>
            <div class="degerous-status">
              <h2>${hourly_day17}°C</h2>
            </div>
          </div>
        `
  })

  weather.then(res => {
    return res.json();
  }).then(data => {
    document.querySelector('.js-values').innerHTML = `
          <p>${data.main.feels_like}°C</p>
          <p>${data.main.humidity}%</p>
          <p>${data.sys.sunrise}</p>
          <p>${data.sys.sunset} PM</p>
          <p>${data.main.pressure} hPa</p>
          <p>${data.wind.speed} km/h NE</p>
          <p>${data.visibility} KM</p>
          <p>${data.clouds.all}%</p>
        `;

    document.querySelector('#city-name').innerHTML = `${data.name}`;
    document.querySelector('#degerous').innerHTML = `${(data.main.temp / 10).toFixed(2)}°C`;
    document.querySelector('#sky-status').innerHTML = `${data.weather[0].description}`;
  })
}

function afterSearch() {
  const weather = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=0edb791cbd6d5ee53debf897d40a8d84`);
  const weatherApi = fetch(`http://api.weatherapi.com/v1/forecast.json?key=d52bfd1a105b4aef9a0192118253009&q=${input.value}&days=1`);

  weatherApi.then(res => {
    return res.json();
  }).then((data) => {
    const hourly_day13 = JSON.parse(data.forecast.forecastday[0].hour[13].temp_c);
    const hourly_day15 = JSON.parse(data.forecast.forecastday[0].hour[15].temp_c);
    const hourly_day17 = JSON.parse(data.forecast.forecastday[0].hour[17].temp_c);
    const image_src = data.forecast.forecastday[0].day.condition.icon;

    document.querySelector('.js-icon').innerHTML = `<img src="https:${image_src}" width="300" alt="">`;

    document.querySelector('.js-box-data-hourly').innerHTML = `
          <div class="box-hourly-data">
            <div class="cloud-status-icon">
              <img src="https:${data.forecast.forecastday[0].hour[13].condition.icon}" width="100" alt="">
            </div>
            <div class="time-status">
              <h2>13 : 00</h2>
            </div>
            <div class="degerous-status">
              <h2>${hourly_day13}°C</h2>
            </div>
          </div>
          <div class="box-hourly-data">
            <div class="cloud-status-icon">
              <img src="https:${data.forecast.forecastday[0].hour[15].condition.icon}" width="100" alt="">
            </div>
            <div class="time-status">
              <h2>15 : 00</h2>
            </div>
            <div class="degerous-status">
              <h2>${hourly_day15}°C</h2>
            </div>
          </div>
          <div class="box-hourly-data">
            <div class="cloud-status-icon">
              <img src="https:${data.forecast.forecastday[0].hour[17].condition.icon}" width="100" alt="">
            </div>
            <div class="time-status">
              <h2>17 : 00</h2>
            </div>
            <div class="degerous-status">
              <h2>${hourly_day17}°C</h2>
            </div>
          </div>
        `
  })

  weather.then(res => {
    return res.json();
  }).then(data => {
    document.querySelector('.js-values').innerHTML = `
          <p>${data.main.feels_like}°C</p>
          <p>${data.main.humidity}%</p>
          <p>${data.sys.sunrise}</p>
          <p>${data.sys.sunset} PM</p>
          <p>${data.main.pressure} hPa</p>
          <p>${data.wind.speed} km/h NE</p>
          <p>${data.visibility} KM</p>
          <p>${data.clouds.all}%</p>
        `;

    document.querySelector('#city-name').innerHTML = `${data.name}`;
    document.querySelector('#degerous').innerHTML = `${(data.main.temp / 10).toFixed(2)}°C`;
    document.querySelector('#sky-status').innerHTML = `${data.weather[0].description}`;
  })
}