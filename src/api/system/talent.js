import request from '@/utils/request'

export default {
  list: function (query) {
    return request({
      url: '/wms/tabSpecialistTalentsManager/findByAllPage',
      method: 'get',
      params: query
    })
  },

  update: function (params) {
    return request({
      url: '/wms/tabSpecialistTalentsManager/updateStatus',
      method: 'post',
      data: params
    })
  }
}