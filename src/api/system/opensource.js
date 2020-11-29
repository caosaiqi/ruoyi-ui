import request from '@/utils/request'


export default {
  list: function (query) {
    return request({
      url: '/wms/demand/getList',
      method: 'get',
      params: query
    })
  },

  update: function (params) {
    return request({
      url: '/wms/demand/updateDemand',
      method: 'post',
      data: params
    })
  }
}