import request from '@/utils/request'


export default {
  list: function demandTypeList(query) {
    return request({
      url: '/wms/domain/getDomain',
      method: 'get',
      params: query
    })
  },

  remove: function (row) {
    return request({
      url: '/wms/domain/deleteDomain',
      method: 'delete',
      data: {
        ids: row.id
      }
    })
  },

  create: function (params) {
    return request({
      url: '/wms/domain/saveDomain',
      method: 'post',
      data: params
    })
  },

  update: function (params) {
    return request({
      url: '/wms/domain/updateDomain',
      method: 'post',
      data: params
    })
  }
}
