import { FETCH_WEATHER } from "../actions/index";

export default function(state=[], action) {
  // handle FETCH_WEATHER
  switch (action.type) {
    case FETCH_WEATHER:
      // method a
      return state.concat([action.payload.data]);
      // method b
      return [action.payload.data, ...state];
  }
  return state;
}
