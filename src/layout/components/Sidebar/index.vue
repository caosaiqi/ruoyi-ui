<template>
    <div :class="{'has-logo':showLogo}">
        <logo v-if="showLogo" :collapse="isCollapse" />
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <!-- <el-menu
                :default-active="activeMenu"
                :collapse="isCollapse"
                :background-color="variables.menuBg"
                :text-color="variables.menuText"
                :unique-opened="true"
                :active-text-color="settings.theme"
                :collapse-transition="false"
                mode="vertical"
            >
                <sidebar-item
                    v-for="(route, index) in permission_routes"
                    :key="route.path  + index"
                    :item="route"
                    :base-path="route.path"
                />
            </el-menu> -->
            <el-menu
      default-active="2"
      background-color="#1f2d3d "
      text-color="#fff"
      active-text-color="#ffd04b">
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>需求发布</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1"><router-link :to="{name:'Data'}">需求发布列表</router-link></el-menu-item>
          <el-menu-item index="1-2">需求类型</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
      <el-menu-item index="1"><router-link :to="{name:'Data'}"><i class="el-icon-setting"></i>需求发布</router-link></el-menu-item>
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
      </el-menu-item>

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
    }
};
</script>
