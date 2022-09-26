import { post } from '../utils/methods'

export default {
    // 菜单查询接口
    queryUserMenu: () => {
        return post('/user/transaction', { apiName: 'queryUserMenu', bipcode: 'BIP10001', activitycode: 'ACT10001' })
    },
    queryCitysOptions: () => {
        return post('/user/transaction', { apiName: 'queryCitysOptions', bipcode: 'BIP10002', activitycode: 'ACT10002' })
    },
    queryAttachOptions: () => {
        return post('/user/transaction', { apiName: 'queryAttachOptions', bipcode: 'BIP10003', activitycode: 'ACT10003' })
    },
    queryClassifyOptions: () => {
        return post('/user/transaction', { apiName: 'queryClassifyOptions', bipcode: 'BIP10004', activitycode: 'ACT10004' })
    }
}
