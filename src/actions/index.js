// TODO: add and export your own actions
export const FETCH_CARS = "FETCH_CARS";
export const FETCH_CAR = "FETCH_CAR";
export const CAR_CREATED = "CAR_CREATED";
export const DELETE_CAR = "DELETE_CAR";

const BASE_URL = "https://wagon-garage-api.herokuapp.com";

export function fetchCars(garage) {
  const url = `${BASE_URL}/${garage}/cars`;
  const promise = fetch(url).then(response => response.json());
  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function fetchCar(id, callback) {
  const promise = fetch(`${BASE_URL}/cars/${id}`)
    .then(response => response.json())
    .then(callback);
  return {
    type: FETCH_CAR,
    payload: promise // Redux Promise will resolve it!
  };
}

export function createCar(garage, body, callback) {
  const request = fetch(`${BASE_URL}/${garage}/cars`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);
  return {
    type: CAR_CREATED,
    payload: request
  };
}

export function deleteCar(car) {
  fetch(`${BASE_URL}/cars/${car.id}`, { method: 'DELETE' })
    .then(response => response.json());
  return {
    type: DELETE_CAR,
    payload: car
  };
}
