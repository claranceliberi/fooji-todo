import axios, { type AxiosRequestConfig } from "axios";

const options: AxiosRequestConfig = {
  baseURL: "http://localhost:3030/api/v1",
};

export const $axios = axios.create(options);
