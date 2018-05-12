// import axios for ajax requests
import axios from "axios";

// would store this in a .gitignore'd file if it was significant
const API_KEY = "665006ef4c0f7ab6083488ede5424ac9";
const OLD_ROOT_URL = "http://samples.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid=b6907d289e10d714a6e88b30761fae22";
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

// export action creator
export function fetch_weather(city) {
  // https://openweathermap.org/forecast5
  const url = `${ROOT_URL}&q=${city},us`;
  // use axios for ajax requests. could use jquery, but don't need ALL of jquery
  // the below request const is actually a promise
  const request = axios.get(url);
  // return action
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
