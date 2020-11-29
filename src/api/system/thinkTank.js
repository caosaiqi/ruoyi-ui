import request from '@/utils/request';

export default {
    list: function demandTypeList(query) {
      return request({
        url: '/wms/tabResearchInstituteManager/findByAllPage',
        method: 'get',
        params: query
      })
    },
    
  update: function (params) {
    return request({
      url: '/wms/tabResearchInstituteManager/updateStatus',
      method: 'post',
      data: params
    })
  }
}