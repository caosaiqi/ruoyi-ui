import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: 路由配置项
 *
 * hidden: true                   // 当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
 * alwaysShow: true               // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
 *                                // 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
 *                                // 若你想不管路由下面的 children 声明的个数都显示你的根路由
 *                                // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
 * redirect: noRedirect           // 当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
 * name:'router-name'             // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * meta : {
    noCache: true                // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
    title: 'title'               // 设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'             // 设置该路由的图标，对应路径src/assets/icons/svg
    breadcrumb: false            // 如果设置为false，则不会在breadcrumb面包屑中显示
  }
 */

// 公共路由
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: (resolve) => require(['@/views/redirect'], resolve)
      }
    ]
  },
  {
    path: '/login',
    component: (resolve) => require(['@/views/login'], resolve),
    hidden: true
  },
  {
    path: '/404',
    component: (resolve) => require(['@/views/error/404'], resolve),
    hidden: true
  },
  {
    path: '/401',
    component: (resolve) => require(['@/views/error/401'], resolve),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        component: (resolve) => require(['@/views/index'], resolve),
        name: 'Home',
        meta: { title: '首页', icon: 'dashboard', noCache: true, affix: true }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    hidden: true,
    redirect: 'noredirect',
    children: [
      {
        path: 'profile',
        component: (resolve) => require(['@/views/system/user/profile/index'], resolve),
        name: 'Profile',
        meta: { title: '个人中心', icon: 'user' }
      }
    ]
  },
  {
    path: '/dict',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'data',
        component: (resolve) => require(['@/views/system/dict/data'], resolve),
        name: 'Data',
        meta: { title: '需求发布', icon: '' }
      }
    ]
  },
  {
    path: '/job',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'log',
        component: (resolve) => require(['@/views/monitor/job/log'], resolve),
        name: 'JobLog',
        meta: { title: '产业项目创新' }
      }
    ]
  },
  {
    path: '/plat',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'platform',
        component: (resolve) => require(['@/views/platform'], resolve),
        name: 'platform',
        meta: { title: '公共平台' }
      }
    ]
  },
  {
    path: '/conver',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'conversion',
        component: (resolve) => require(['@/views/conversion'], resolve),
        name: 'conversion',
        meta: { title: '军民技术成果转化' }
      }
    ]
  },
  {
    path: '/labor',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'laboratory',
        component: (resolve) => require(['@/views/laboratory'], resolve),
        name: 'laboratory',
        meta: { title: '实验室' }
      }
    ]
  },
  {
    path: '/devel',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'development',
        component: (resolve) => require(['@/views/development'], resolve),
        name: 'development',
        meta: { title: '新型研发机构' }
      }
    ]
  },
  {
    path: '/pol',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'policy',
        component: (resolve) => require(['@/views/innovate/policy'], resolve),
        name: 'Policy',
        meta: { title: '科技创新政策' }
      }
    ]
  },
  {
    path: '/resour',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'resource',
        component: (resolve) => require(['@/views/innovate/resource'], resolve),
        name: 'Resource',
        meta: { title: '项目通道资源' }
      }
    ]
  },
  {
    path: '/adv',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'advanced',
        component: (resolve) => require(['@/views/advanced'], resolve),
        name: 'advanced',
        meta: { title: '先进前沿技术' }
      }
    ]
  },
  {
    path: '/job',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'log',
        component: (resolve) => require(['@/views/monitor/job/log'], resolve),
        name: 'JobLog',
        meta: { title: '产业项目创新' }
      }
    ]
  },
  {
    path: '/job',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'log',
        component: (resolve) => require(['@/views/monitor/job/log'], resolve),
        name: 'JobLog',
        meta: { title: '产业项目创新' }
      }
    ]
  },
  {
    path: '/job',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'log',
        component: (resolve) => require(['@/views/monitor/job/log'], resolve),
        name: 'JobLog',
        meta: { title: '产业项目创新' }
      }
    ]
  },
  {
    path: '/job',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'log',
        component: (resolve) => require(['@/views/monitor/job/log'], resolve),
        name: 'JobLog',
        meta: { title: '产业项目创新' }
      }
    ]
  },
  {
    path: '/job',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'log',
        component: (resolve) => require(['@/views/monitor/job/log'], resolve),
        name: 'JobLog',
        meta: { title: '产业项目创新' }
      }
    ]
  },
  {
    path: '/gen',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'edit/:tableId(\\d+)',
        component: (resolve) => require(['@/views/tool/gen/editTable'], resolve),
        name: 'GenEdit',
        meta: { title: '修改生成配置' }
      }
    ]
  },
  {
    path: '/role',
    component: Layout,
    children: [
      {
        path: '',
        component: (resolve) => require(['@/views/system/role'], resolve),
        name: '角色权限',
        meta: { title: '角色权限' }
      }
    ]
  },
  {
    path: '/demandType',
    component: Layout,
    children: [
      {
        path: '',
        component: (resolve) => require(['@/views/demandType'], resolve),
        name: 'DemandType',
        meta: { title: '需求类型' }
      }
    ]
  },
  {
    path: '/publisherType',
    component: Layout,
    children: [
      {
        path: '',
        component: (resolve) => require(['@/views/publisherType'], resolve),
        name: 'PublisherType',
        meta: { title: '发布方类型' }
      }
    ]
  },
  {
    path: '/domainType',
    component: Layout,
    children: [
      {
        path: '',
        component: (resolve) => require(['@/views/domainType'], resolve),
        name: 'DomainType',
        meta: { title: '领域类型' }
      }
    ]
  },
  {
    path: '/enterPriseType',
    component: Layout,
    children: [
      {
        path: '',
        component: (resolve) => require(['@/views/enterPriseType'], resolve),
        name: 'EnterPriseType',
        meta: { title: '企业类型' }
      }
    ]
  },
  {
    path: '/news',
    component: Layout,
    children: [
      {
        path: '',
        component: (resolve) => require(['@/views/news'], resolve),
        name: 'News',
        meta: { title: '新闻管理' }
      },
      {
        path: 'form',
        component: (resolve) => require(['@/views/news/form'], resolve),
        name: 'NewsForm',
        meta: { title: '新闻编辑' }
      },
      {
        path: 'type',
        component: (resolve) => require(['@/views/newsType'], resolve),
        name: 'NewsType',
        meta: { title: '新闻类型' }
      }
    ]
  },
  {
    path: '/resultsType',
    component: Layout,
    children: [
      {
        path: '',
        component: (resolve) => require(['@/views/resultsType'], resolve),
        name: 'ResultsType',
        meta: { title: '成果类型' }
      }
    ]
  },
  {
    path: '/thinkTank',
    component: Layout,
    children: [
      {
        path: '',
        component: (resolve) => require(['@/views/innovate/thinkTank'], resolve),
        name: 'ThinkTank',
        meta: { title: '智库' }
      }
    ]
  },
  {
    path: '/thinkTank',
    component: Layout,
    children: [
      {
        path: '',
        component: (resolve) => require(['@/views/innovate/thinkTank'], resolve),
        name: 'ThinkTank',
        meta: { title: '智库' }
      }
    ]
  },
  {
    path: '/lab',
    component: Layout,
    children: [
      {
        path: '',
        component: (resolve) => require(['@/views/innovate/lab'], resolve),
        name: 'Lab',
        meta: { title: '实验室' }
      }
    ]
  },
  {
    path: '/talent',
    component: Layout,
    children: [
      {
        path: '',
        component: (resolve) => require(['@/views/innovate/talent'], resolve),
        name: 'Talent',
        meta: { title: '人才/专家' }
      }
    ]
  },
  {
    path: '/testPlatform',
    component: Layout,
    children: [
      {
        path: '',
        component: (resolve) => require(['@/views/innovate/testPlatform'], resolve),
        name: 'TestPlatform',
        meta: { title: '共享实验室设备' }
      }
    ]
  },
]

export default new Router({
  mode: 'history', // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
