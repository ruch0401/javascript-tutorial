window.addEventListener("load", () => {
  let lon;
  let lat;
  const temperatureDegreee = document.querySelector(".temperature-degree");
  const temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureUnit = document.querySelector(".temperature-unit");
  const locationTimezone = document.querySelector(".location-timezone");
  const temperatureSection = document.querySelector(".degree-section");

  const apiKey = "7bc1ea7ffd50d848c35da2fcf58523ea";
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lon = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = "https://serene-headland-88859.herokuapp.com/";

      const apiUrl = `${proxy}https://api.darksky.net/forecast/${apiKey}/${lat},${lon}`;

      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const { temperature, summary, icon } = data.currently;

          // Manipulate DOM using data from the API
          temperatureDegreee.textContent = temperature;
          temperatureDescription.textContent = summary;
          locationTimezone.textContent = data.timezone;

          // Set respective Icon
          const iconId = document.querySelector(".icon");
          setIcon(icon, iconId);

          // We wish to convert the temperature to C whenever we click on the section
          temperatureSection.addEventListener("click", () => {
            if (temperatureUnit.innerText === "F") {
              const convertedtTemperature = (temperature - 32) * (5 / 9);
              temperatureDegreee.textContent =
                Math.round((convertedtTemperature + Number.EPSILON) * 100) /
                100;
              temperatureUnit.textContent = "C";
            } else {
              temperatureDegreee.textContent = temperature;
              temperatureUnit.textContent = "F";
            }
          });
        });
    });
  }

  function setIcon(icon, iconId) {
    var skycons = new Skycons({ color: "white" });
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    console.log(currentIcon);
    skycons.play();
    return skycons.set(iconId, Skycons[currentIcon]);
  }
});
