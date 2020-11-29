import request from '@/utils/request'


export default {
  list: function demandTypeList(query) {
    return request({
      url: '/wms/trtController/getResultsType',
      method: 'get',
      params: query
    })
  },

  remove: function (row) {
    return request({
      url: '/wms/trtController/deleteResultsType',
      method: 'delete',
      data: {
        ids: row.id
      }
    })
  },


  create: function (params) {
    return request({
      url: '/wms/trtController/saveResultsType',
      method: 'post',
      data: params
    })
  },

  update: function (params) {
    return request({
      url: '/wms/trtController/updateResultsType',
      method: 'post',
      data: params
    })
  }
}
