import request from '@/utils/request'


export default {
  list: function demandTypeList(query) {
    return request({
      url: '/wms/demandType/getDemandType',
      method: 'get',
      params: query
    })
  },

  remove: function (row) {
    return request({
      url: '/wms/demandType/deleteDemandType',
      method: 'delete',
      data: {
        ids: row.id
      }
    })
  },


  create: function (params) {
    return request({
      url: '/wms/demandType/saveDemandType',
      method: 'post',
      data: params
    })
  },

  update: function (params) {
    return request({
      url: '/wms/demandType/updateDemandType',
      method: 'post',
      data: params
    })
  }
}
