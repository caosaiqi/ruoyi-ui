import request from '@/utils/request';

export default {
    list: function demandTypeList(query) {
      return request({
        url: '/wms/tabProjectChannelManager/findByAllPage',
        method: 'get',
        params: query
      })
    },
  
    remove: function (row) {
      return request({
        url: '/wms/tabProjectChannelManager/findByAllPage',
        method: 'delete',
        data: {
          ids: row.id
        }
      })
    }
}