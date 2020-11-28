import request from '@/utils/request'
import http from '@/utils/http'

// 接口定义
const apis = {
  Login: {
    // 后台登录
    login(params) {
      return request.post('/login', params)
    },
    //获取图形验证码
    code() {
      return request.get('captcha/captchaImage?type=math')
    },
    letuser(params){
      return request.get('/order-server/order/user/public/shop/getShopInfoByUserId',{params})
    }  
  },
  //需求发布
  Demand:{
    //需求类型
    demandlist(){
      return request.get('/tabDemandType/getTabDemandType')
    },
    //领域类型
    demandGlist(){
      return request.get('/tabDomain/getTabDomain')
    },
    //需求列表
    getlist(params){
      return request.get('/wms/demand/getList',{params})
    },
    //审核通过
    ifok(params){
      return request.put('/wms/demand/updateDemand',params)
    },
    
  },
  //产业创新
  Log:{
    //创新列表
    loglist(params){
      return request.get('/wms/recommend/getList',{params})
    },
    //审核
    ifok(params){
      return request.put('/wms/recommend/updateRecommend',params)
    },
 
  },
   //公共平台
   Platform:{
    platformlist(params){
      return request.get('/wms/tabCommunalPlatformManager/findByAllPage',{params})
    },
    ifok(params){
      return request.put('/wms/tabCommunalPlatformManager/updateStatus',params)
    }
  },
  //军转民
  Conversion:{
    conversionlist(params){
      return request.get('/wms/technologyAchievementManager/findByAllPage',{params})
    },
  }
 
  
}
export default apis
