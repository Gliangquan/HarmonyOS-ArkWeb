import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from '@ohos/axios';
import { webview } from '@kit.ArkWeb'

class BaseRequest {
  instance: AxiosInstance;

  constructor(config: AxiosRequestConfig<AxiosResponse>) {
    this.instance = axios.create(config);

    // 请求拦截
    this.instance.interceptors.request.use((config) => {
      let cookie = webview.WebCookieManager.fetchCookieSync('index.html');
      if (cookie) {
        config.headers['Cookie'] = cookie;
      }
      console.log('Request config', config);
      return config;
    }, (err) => {
      console.error('Request error', err);
      return Promise.reject(err);
    });

    // 响应拦截
    this.instance.interceptors.response.use((response: AxiosResponse<any, any>) => {
      // let cookie = response.headers['set-cookie'];
      // if (cookie) {
      //   web_webview.WebCookieManager.configCookieSync('index.html', 'ewqewq');
      //   let value = web_webview.WebCookieManager.fetchCookieSync('index.html');
      //   console.log("fetchCookieSync cookie = " + value);
      // }
      // return response.data;
      return response;
    }, (err) => {
      console.error('Response error', err);
      return Promise.reject(err);
    });
  }

  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.instance.request<any, T>(config);
  }

  get<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' });
  }

  post<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' });
  }
}

export const axiosAPI = new BaseRequest({
  baseURL: 'https://261c8709.r26.cpolar.top',
  timeout: 60000,
  withCredentials: true
});