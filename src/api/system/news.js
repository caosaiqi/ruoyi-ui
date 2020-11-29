import request from '@/utils/request'


export default {
  type: function (query) {
    return request({
      url: '/tntController/tabNewsTypeFind',
      method: 'get',
      params: query
    })
  },

  info: function (query) {
    return request({
      url: '/wms/nbmController/newsUpdatePages',
      method: 'get',
      params: query
    })
  },

  list: function (query) {
    return request({
      url: '/wms/nbmController/newsFindAll',
      method: 'get',
      params: query
    })
  },

  remove: function (params) {
    return request({
      url: '/wms/nbmController/delNewsById',
      method: 'get',
      params: params
    })
  },

  create: function (params) {
    return request({
      url: '/wms/nbmController/saveNews',
      method: 'post',
      data: params
    })
  },

  update: function (params) {
    return request({
      url: '/wms/nbmController/newsUpdate',
      method: 'post',
      data: params
    })
  }
}
