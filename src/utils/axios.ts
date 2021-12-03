import axios from "axios";
import { Message } from '@arco-design/web-react';
import router from '../history';
// 全局拦截器，这个文件不要动！！！！

// 创建axios实例
const service = axios.create({
  // baseURL: 'http://49.234.235.135:6060', // 服务器-前端解决跨域
  baseURL: 'http://localhost:6060', // 本地-前端解决跨域
  timeout: 10000 // 请求超时时间
});

// 配置全局的拦截器
service.interceptors.request.use(config => {
  // 如果配置了isLoading: false，则不显示loading
  if (localStorage.getItem('loginParams')) {
    const token = JSON.parse(localStorage.getItem("loginParams")).token
    config.headers.common.authorization = token
  }
  return config;
}, error => {
  Message.error('Oops 跟地球断网了！')
  return Promise.reject(error)
});



// 响应头拦截
service.interceptors.response.use(response => {
  return response.data;
}, error => {
  // 当返回信息为未登录或者登录失效的时候重定向为登录页面
  const { status = '400' } = error?.response
  // eslint-disable-next-line no-console
  console.log(error)
  switch (status) {
    case 400:
      Message.error("参数信息有误");
      router.push("/login");
      break;
    case 401:
      Message.error("用户登录令牌过期，请重新登录");
      router.push("/login");
      break;
    case 302:
      Message.error("用户未登录");
      router.push("/login");
      break;
    case 403:
      Message.error('数据请求失败，请稍后重试！');
      break;
    case 404:
      Message.error("当前资源不存在或已过期！");
      break;
    case 500:
      Message.error("服务器内部错误");
      break;
    case 560:
      Message.error("数据库异常");
      break;
    default:
      Message.error(error.message);
      break;
  }
  return Promise.reject(error)
});

export default service;
