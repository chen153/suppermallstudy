import originAxios from 'axios'
export default function axios(config) {
  const instance = originAxios.create({
    baseURL: 'http://123.207.32.32:8000/api/h8',
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