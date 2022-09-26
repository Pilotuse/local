import { post } from '../utils/methods';

export default {
  // 登录接口
  login: ({ userName, password }) => {
    return post('/user/login', {
      username: userName,
      password,
      apiName: 'login',
      bipcode: 'BIP20003',
      activitycode: 'ACT20003',
    });
  },
  // 自定义用户信息查询接口
  queryUserType: ({ userinfos }) => {
    return post('/user/transaction', {
      userinfos,
      apiName: 'queryUserType',
      bipcode: 'BIP20004',
      activitycode: 'ACT20004',
    });
  },
  // 成员管理页面数据查询接口
  queryAllUserType: ({ searchKey }) => {
    return post('/user/transaction', {
      searchKey,
      apiName: 'queryAllUserType',
      bipcode: 'BIP20005',
      activitycode: 'ACT20005',
    });
  },

  // // 单一用户注册
  register: (info) => post('/user/register', info),

  // // 批量用户注册(建议注册数量小于200人) -- 文件接口  用户名，预设密码(基础校验，大小写字母以及数字，不能含有特殊字符)
  // batchRegister: (info) => post('/user/batchRegister', info),
  // // 用户激活接口
  // activation: (info) => post('/user/activation', info)
};
