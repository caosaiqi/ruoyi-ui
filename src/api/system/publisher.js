import request from '@/utils/request'


export default {
  list: function demandTypeList(query) {
    return request({
      url: '/wms/publisher/getPublisher',
      method: 'get',
      params: query
    })
  },

  remove: function (row) {
    return request({
      url: '/wms/publisher/deletePublisher',
      method: 'delete',
      data: {
        ids: row.id
      }
    })
  },

  create: function (params) {
    return request({
      url: '/wms/publisher/savePublisher',
      method: 'post',
      data: params
    })
  },

  update: function (params) {
    return request({
      url: '/wms/publisher/updatePublisher',
      method: 'post',
      data: params
    })
  }
}
