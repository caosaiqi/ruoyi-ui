<template>
  <div class="app-container">
    <el-form
      :model="queryParams"
      ref="queryForm"
      :inline="true"
      label-width="68px"
    >
      <el-form-item label="新闻标题" >
        <el-input v-model="queryParams.title" size="small" clearable  placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="cyan"
          icon="el-icon-search"
          size="mini"
          @click="getList()"
          >搜索</el-button
        >
        <el-button
          icon="el-icon-refres"
          size="mini"
          @click="initList()"
          >全部</el-button
        >
        <el-button
          type="cyan"
          icon="el-icon-plus"
          size="mini"
          @click="handleCreate"
          >新建</el-button
        >
      </el-form-item>
    </el-form>
    <el-table
      v-loading="loading"
      :data="dataList"
    >
      <el-table-column label="新闻标题" align="center" prop="title"  />
      <el-table-column label="类型" align="center">
        <template slot-scope="scope"  v-if="scope.row && scope.row.typeList">
          <el-tag
            style="margin-right: 5px"
            size="small"
            v-for="(item, index) in scope.row.typeList"
            :key="index"
            >小型标签</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="新闻作者" align="center"  prop="author"/>
       <el-table-column label="新闻来源" align="center"  prop="messageSource"/>
      <el-table-column
        label="操作"
        align="center"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="text" @click="handleRemove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class='pagination'>
      <el-pagination
        @current-change="handleCurrentChange"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="queryParams.total"
      ></el-pagination>
   </div>

  </div>
</template>

<script>
import API from "@/api/system/news.js";

export default {
  name: 'demandType',
  data() {
    return {
      loading: false,
      dataList: [],

      queryParams: {
        title: undefined,
      },
    }
  },

  created () {
    this.getList()
  },
  methods: {
    initList () {
      this.queryParams.name = undefined
      this.queryParams.enTypeId = undefined
      this.getList({
        page: 1
      })
    },

    async getList (params = {}) {
      this.loading = true
      try {
        const { data } =  await API.list({...this.queryParams, ...params})

        const { total, pageNum } = data
        Object.assign(this.queryParams, {
          total, pageNum
        })

        this.dataList = data.list || []
      } catch (err) {
        throw err
      } finally {
        this.loading = false
      }
    },

    handleCurrentChange (pageNum) {
      this.getList({
        page: pageNum
      })
    },

    handleCreate (){
      this.$router.push('news/form')
    },

    handleEdit (row) {
      this.$router.push(`/news/form?newsId=${row.newsId}`)
    },

    async handleRemove (row) {
      try {
        await API.remove({
          newsId: row.newsId
        })
        this.getList()
      } catch(err) {
        throw err
      }
    }
  }
}
</script>
<style>
  .pagination{
    margin-top: 30px;
    text-align: center;
  }
</style>
