import originAxios from 'axios'
export default function axios(config) {
  const instance = originAxios.create({
    baseURL: '',
    timeout: 5000,
    headers: '',
  });
  instance.interceptors.request.use(config => {
    return config;
  }, error => {
    return error;
  })
  instance.interceptors.response.use(response => {
    return response.data;
  }, error => {
    return error;
  })
  return instance(config)
}