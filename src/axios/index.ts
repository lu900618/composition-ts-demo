import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, Method, AxiosPromise } from "axios";
import { App, inject } from "vue";

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

const http: AxiosInstance = axios.create();
http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (err: Error) => Promise.reject(err)
);
http.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (err: Error) => Promise.reject(err)
);

const axiosName = Symbol();
// 注册到 vue 的install 方法
export default function axiosInstall(vue: App) {
  vue.config.globalProperties.$axios = http;
  vue.provide<AxiosInstance>(axiosName, http);
}

export function useAxios(): AxiosInstance {
  return inject<AxiosInstance>(axiosName)!; // ! 表示一定会有 ？表示可有可无的
}

export function useRequest<D = any, Res = any>(url: string, data: D, type: Method): AxiosPromise<Res> {
  return http({
    url,
    data: data ?? {},
    method: type,
  });
}
