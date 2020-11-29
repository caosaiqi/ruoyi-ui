import request from '@/utils/request'


export default {
  list: function (query) {
    return request({
      url: '/wms/technologyAchievementManager/findByAllPage',
      method: 'get',
      params: query
    })
  },

  update: function (params) {
    return request({
      url: '/wms/technologyAchievementManager/updateStatus',
      method: 'post',
      data: params
    })
  }
}