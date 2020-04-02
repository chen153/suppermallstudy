import originAxios from 'axios'
export default function axios(config) {
  const instance = originAxios.create({
    baseURL: '',
    timeout: 5000,
    headers: '',
  });
  instance.interceptors.request.use(config => {
    // console.log('requests 拦截');
    return config;
  }, error => {
    // console.log('response');
    return error;
  })
  instance.interceptors.response.use(response => {
    // console.log('response 拦截成功！');
    return response.data;
  }, error => {
    // console.log('response 拦截失败！');
    return error;
  })
  return instance(config)
}