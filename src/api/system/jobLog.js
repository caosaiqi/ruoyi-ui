import request from '@/utils/request'


export default {
  list: async function (query) {
    const ret = await request({
      url: '/wms/demand/getList',
      method: 'get',
      params: query
    })
    const { data } = ret
    data.list = data.demandList
    console.log(ret)
    return ret
  },

  update: function (params) {
    return request({
      url: '/wms/recommend/updateRecommend',
      method: 'post',
      data: params
    })
  }
}