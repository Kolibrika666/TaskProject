import axios from "axios";
export const httpClient = axios.create({
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: false,
});

httpClient.interceptors.request.use((config) => {
  config.headers.Authorization =
    "Bearer 14559a59b7d0d3df78e13cf68027a1c028582383475c344a8829133310c211d35462b185d2c60a3a37aeda75cc955cdbca104bec98b6fee88628244d82bf8bc8215d78e878b4b84d8d24a2e3e486f241d9e0285455b624d560b0068b882ba96d964e9271c6b57ff505ca4e28f3bc429d0bb7bd9f092ef233a3268b1b84bbbe0c";
  return config;
});
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response ? error.response.status : null;
    const message = error?.response?.data;
    if (status === 401) {
      console.log("401", message);
    } else if (status === 404) {
      console.log("404", message);
    } else {
      console.log(error?.response?.data);
    }
    return Promise.reject(error);
  }
);
