<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline" style="marginTop:30px">
      <el-form-item label="名称">
        <el-input v-model="formInline.name" placeholder="请输入需求名称" clearable  size="small"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="formInline.status " clearable  size="small">
          <el-option label="全部" value="">全部</el-option>
          <el-option :label="item.name" :value="item.id" v-for="item in status" :key="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所属领域">
        <el-select v-model="formInline.domainId " clearable  size="small">
          <el-option label="全部" value="">全部</el-option>
          <el-option :label="item.name" :value="item.id" v-for="(item,index) in domains" :key="index"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="发布方">
        <el-select v-model="formInline.publisherId" clearable size="small">
          <el-option label="全部" value="">全部</el-option>
          <el-option :label="item.name" :value="item.id" v-for="(item,index) in publisher" :key="index"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" size="small">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getTabDomain, getPublisherAll } from '@/api/system/searchBox'

export default {
  name: 'dictSearchBox',
  data () {
    return {
      formInline:{
        name:'',
        status:'',
        domainId:'',
        publisherId: '',
      },
      status: [
        { name: '通过', id: '2' },
        { name: '通过', id: '3' },
      ],
      domains: [],
      publisher: []
    }
  },
  created () {
    getTabDomain().then((res) => {
      this.domains = res.data
    })
    getPublisherAll().then(({data}) => {
      this.publisher = data
    })
  },
  methods: {
    onSubmit () {
      this.$emit('search', this.formInline)
    },
  },
}
</script>
