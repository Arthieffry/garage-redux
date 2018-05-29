// TODO: add and export your own actions
export const FETCH_CARS = "FETCH_CARS";
export const FETCH_CAR = "FETCH_CAR";
export const CAR_CREATED = "CAR_CREATED";

export function fetchCars(garage) {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
  const promise = fetch(url).then(response => response.json());
  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function fetchCar(id) {
  const promise = fetch(`$https://wagon-garage-api.herokuapp.com/cars/${id}`)
    .then(response => response.json());
  return {
    type: FETCH_CAR,
    payload: promise // Redux Promise will resolve it!
  };
}

export function createCar(garage, body) {
  const request = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json());
  return {
    type: CAR_CREATED,
    payload: request
  };
}
