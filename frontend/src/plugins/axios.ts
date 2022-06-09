import axios, { type AxiosRequestConfig } from "axios";

const options: AxiosRequestConfig = {
  baseURL: "http://app-dev/api/v1",
};

export const $axios = axios.create(options);
