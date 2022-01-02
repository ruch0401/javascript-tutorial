window.addEventListener("load", () => {
  let lon;
  let lat;
  const temperatureDegreee = document.querySelector(".temperature-degree");
  const temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  const locationTimezone = document.querySelector(".location-timezone");

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
