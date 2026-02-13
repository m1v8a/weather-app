const key = "UZR29U7FSECY5TFVFJWAM8CVW";

export async function getWeatherData(
  { location, unitGroup = "metric" },
  callback
) {
  try {
    const res = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unitGroup}&key=${key}`
    );
    const data = await res.json();
    callback(await data);
  } catch (err) {
    console.error(new Error(err));
  }
}
