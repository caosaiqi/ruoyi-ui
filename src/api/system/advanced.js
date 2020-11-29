import request from '@/utils/request'


export default {
  list: function (query) {
    return request({
      url: '/wms/btptController/btptFindAll',
      method: 'get',
      params: query
    })
  },

  update: function (params) {
    return request({
      url: '/wms/btptController/btptUpdate',
      method: 'post',
      data: params
    })
  }
}