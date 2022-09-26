import { post } from '../utils/methods'

export default {
  // 菜单查询接口
  insertRearchCase: (infos) => {
    return post('/user/transaction', { apiName: 'insertRearchCase', bipcode: 'BIP40001', activitycode: 'ACT40001', ...infos })
  },
  queryRearchCase: (infos) => {
    return post('/user/transaction', { apiName: 'queryRearchCase', bipcode: 'BIP40002', activitycode: 'ACT40002', ...infos })
  }
}
