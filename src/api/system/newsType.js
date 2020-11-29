import request from '@/utils/request'


export default {
  list: function (query) {
    return request({
      url: '/wms/nbmController/newsTypeFindPage',
      method: 'get',
      params: query
    })
  },

  remove: function (params) {
    return request({
      url: '/wms/nbmController/delNewsType',
      method: 'get',
      params: {
        typeId: params.typeId
      }
    })
  },

  create: function (params) {
    return request({
      url: '/wms/nbmController/tabNewsTypeSave',
      method: 'post',
      data: params
    })
  },

  update: function (params) {
    return request({
      url: '/wms/nbmController/updateNewsType',
      method: 'post',
      data: params
    })
  }
}
