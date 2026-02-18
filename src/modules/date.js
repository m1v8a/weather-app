export function formatTime(time) {
  let hours = time.slice(0, 2);
  const minutes = time.slice(3, 5);
  hours = hours[0] === "0" ? Number(hours[1]) : Number(hours);
  let hr = hours;
  let meridiem = "am";
  if (hours >= 12 && hours < 23) {
    if (hours - 12 <= 0) {
      hr = 12;
    } else {
      hr = hours - 12;
    }
    meridiem = "pm";
  } else {
    if (hours === 23) {
      hr = 12;
    } else {
      hr = hours === 0 ? 12 : hours;
    }
    meridiem = "am";
  }
  return {
    hour: hr < 10 ? "0" + hr : hr,
    minutes,
    meridiem,
  };
}
