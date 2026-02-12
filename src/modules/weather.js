const key = "UZR29U7FSECY5TFVFJWAM8CVW";

export async function getWeatherData(location, callback) {
  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${key}`
  );
  const data = await res.json();
  callback(await data);
}
