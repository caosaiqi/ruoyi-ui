import request from '@/utils/request'


export default {
  type: function (query) {
    return request({
      url: '/tabEnterpriseType/getEnterpriseTypeList',
      method: 'get',
      params: query
    })
  },

  list: function (query) {
    return request({
      url: '/wms/enterPrise/getEnterprise',
      method: 'get',
      params: query
    })
  },

  remove: function (row) {
    return request({
      url: '/wms/enterPrise/deleteEnterprise',
      method: 'delete',
      data: {
        ids: row.id
      }
    })
  },

  create: function (params) {
    return request({
      url: '/wms/enterPrise/saveEnterprise',
      method: 'post',
      data: params
    })
  },

  update: function (params) {
    return request({
      url: '/wms/enterPrise/updateEnterprise',
      method: 'post',
      data: params
    })
  }
}
