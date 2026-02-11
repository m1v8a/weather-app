import testFetch from "../testdata/testFetch.js";

export async function getWeatherData(callback) {
  const res = await testFetch();
  const data = await res.json();
  callback(await data);
}

export function parseWeatherData(data) {
  const conditions = data.currentConditions;
  return {
    conditions: conditions.conditions,
    timezone: data.timezone,
    temp: conditions.temp,
    feelslike: conditions.feelslike,
    wind: {
      dir: conditions.winddir,
      gust: conditions.windgust,
      speed: conditions.windspeed,
    },
    sun: {
      set: conditions.sunset,
      rise: conditions.sunrise,
    },
  };
}
