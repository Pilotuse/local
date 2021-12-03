import axios from './axios';

// 需求中不涉及 patch操作
const post = (url, data) => {
  return axios({
    method: 'post',
    url,
    data,
  });
};

const get = (url, params) => {
  return axios({
    method: 'get',
    url,
    params,
  });
};

export { post, get };
