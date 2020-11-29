<template>
    <div :class="{'has-logo':showLogo}">
        <logo v-if="showLogo" :collapse="isCollapse" />
        <el-scrollbar>
          <el-menu
            default-active="2"
            background-color="#1f2d3d "
            text-color="#fff"
            active-text-color="#ffd04b">
            <template v-for="(item, index) in menuList">
              <el-submenu :key="index" v-if="item.children" :index="index">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{item.name}}</span>
                </template>
                <el-menu-item :index="`${index}-${subIndex}`" :key="subIndex" v-for="(subItem, subIndex) in item.children" >
                  <router-link :to="{name: subItem.linkName}"><i class="el-icon-setting"></i>{{ subItem.name }}</router-link>
                </el-menu-item>
              </el-submenu>
              <el-menu-item :index="index" :key="index" v-else>
                <router-link :to="{name: item.linkName}"><i class="el-icon-setting"></i>{{ item.name }}</router-link>
              </el-menu-item>
            </template>
            <!-- <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
               <el-menu-item index="1-1">选项1</el-menu-item>
            </el-submenu> -->
<!--
      <el-menu-item index="1">
        <router-link :to="{name:'Data'}"><i class="el-icon-setting"></i>需求发布</router-link></el-menu-item>
      <el-menu-item index="2">
        <router-link :to="{name:'JobLog'}"><i class="el-icon-setting"></i>产业创新项目推荐</router-link>
      </el-menu-item>
      <el-menu-item index="3" >
         <router-link :to="{name:'platform'}"><i class="el-icon-setting"></i>公共平台</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link :to="{name:'conversion'}"><i class="el-icon-setting"></i>军转民技术成果</router-link>
      </el-menu-item>
      <el-menu-item index="5">
         <router-link :to="{name:'laboratory'}"><i class="el-icon-setting"></i>实验室</router-link>
      </el-menu-item>
      <el-menu-item index="6">
         <router-link :to="{name:'development'}"><i class="el-icon-setting"></i>新型研发机构</router-link>
      </el-menu-item>
      <el-menu-item index="7">
        <router-link :to="{name:'policy'}"><i class="el-icon-setting"></i>科技创新政策</router-link>
      </el-menu-item>
      <el-menu-item index="8">
        <router-link :to="{name:'resource'}"><i class="el-icon-setting"></i>项目通道资源</router-link>
      </el-menu-item>
      <el-menu-item index="9">
         <router-link :to="{name:'advanced'}"><i class="el-icon-setting"></i>先进前沿技术</router-link>
      </el-menu-item>
      <el-menu-item index="10">
        <router-link :to="{name:'platform'}"><i class="el-icon-setting"></i>需求类型管理</router-link>
      </el-menu-item>
      <el-menu-item index="11">
         <router-link :to="{name:'platform'}"><i class="el-icon-setting"></i>领域类型管理</router-link>
      </el-menu-item>
      <el-menu-item index="12">
        <router-link :to="{name:'platform'}"><i class="el-icon-setting"></i>企业管理</router-link>
      </el-menu-item>
      <el-menu-item index="13">
        <router-link :to="{name:'platform'}"><i class="el-icon-setting"></i>发布方管理</router-link>
      </el-menu-item> -->
    </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import variables from "@/assets/styles/variables.scss";

export default {
  components: { SidebarItem, Logo },
  data () {
    return {
      menuList: [
        {
          name: '首页',
          linkName: 'Home'
        },
        {
          name: '开源需求发布',
          linkName: 'Data'
        },
        {
          name: '军工民技术成果',
          linkName: 'conversion'
        },
        {
          name: '先进前沿技术',
          linkName: 'advanced'
        },
        {
          name: '新兴军工产业',
          linkName: 'JobLog'
        },
        {
          name: '创新资源要素',
          children: [
            {
              name: '科技创新政策',
              linkName: 'Policy'
            },
            {
              name: '项目通道资源',
              linkName: 'Resource'
            },
            {
              name: '智库',
              linkName: 'ThinkTank'
            },
            {
              name: '实验室',
              linkName: 'Lab'
            },
            {
              name: '共享实验室设备',
              linkName: 'TestPlatform'
            },
            {
              name: '人才/专家',
              linkName: 'Talent'
            },
          ]
        },
        {
          name: '资讯管理',
          children: [
            {
              name: '新闻管理',
              linkName: 'News'
            },
          ]
        },
        {
          name: '类型管理',
          children: [
            {
              name: '需求类型',
              linkName: 'DemandType'
            },
            {
              name: '成果类型',
              linkName: 'ResultsType'
            },
            {
              name: '发布方类型',
              linkName: 'PublisherType'
            },
            {
              name: '企业类型',
              linkName: 'EnterPriseType'
            },
            {
              name: '新闻类型',
              linkName: 'NewsType'
            },
            {
              name: '领域类型',
              linkName: 'DomainType'
            },
          ]
        },
      ]
    }
  },
  computed: {
    ...mapState(["settings"]),
    ...mapGetters(["permission_routes", "sidebar"]),
    activeMenu() {
        const route = this.$route;
        const { meta, path } = route;
        // if set path, the sidebar will highlight the path you set
        if (meta.activeMenu) {
            return meta.activeMenu;
        }
        return path;
    },
    showLogo() {
        return this.$store.state.settings.sidebarLogo;
    },
    variables() {
        return variables;
    },
    isCollapse() {
        return !this.sidebar.opened;
    }
  },

};
</script>
