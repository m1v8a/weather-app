export async function fetchWeather({ loc, unitGroup = "metric" }) {
  const res =
    await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?key=UZR29U7FSECY5TFVFJWAM8CVW&unitGroup=${unitGroup}&contentType=json
`);
  const data = await res.json();
  return data;
}
