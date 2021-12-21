import { post } from '../utils/methods'

export default {
  // 菜单查询接口
  queryProdInfos: () => {
    return post('/user/transaction', { apiName: 'queryProdInfos', bipcode: 'BIP30001', activitycode: 'ACT30001' })
  },
  querySnkrsKanban(params) {
    return post('/user/transaction', { apiName: 'querySnkrsKanban', bipcode: 'BIP30002', activitycode: 'ACT30002', ...params })
  },
  onSnkrsDelete(params) {
    return post('/user/transaction', { apiName: 'onSnkrsDelete', bipcode: 'BIP30003', activitycode: 'ACT30003', ...params })
  }
}
