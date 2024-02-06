import axios, { AxiosInstance, AxiosRequestConfig }  from "axios";

class ApiService {
  service: AxiosInstance;

  constructor () {
    const service = axios.create({
      baseURL: "https://api.hh.ru/",
      headers: {
        "User-Agent": "MyApp/1.0 (i.strizhov@list.ru)"
      }
    })
    this.service = service
  }

  async get (url: string, config: AxiosRequestConfig) {
     let res = await this.service.get(url, config)

     return res.data
  }

  async post (url: string, config: AxiosRequestConfig) {
    let res = await this.service.post(url, config.data, config)

    return res.data
  }

  async delete (url: string, config: AxiosRequestConfig) {
    let res = await this.service.delete(url, config)

    return res.data
  }

  async patch (url: string, config: AxiosRequestConfig) {
    let res = await this.service.patch(url, config.data, config)

    return res.data
  }
}

export const apiService = new ApiService()