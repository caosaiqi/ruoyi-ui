<template>
  <div class="app-container">
    <el-form
      :model="queryParams"
      ref="queryForm"
      :inline="true"
      label-width="68px"
    >
      <el-form-item label="企业名称" prop="dictType"  >
        <el-input v-model="queryParams.name" size="small" clearable  placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item label="企业类型" prop="location">
          <el-select v-model="queryParams.enTypeId" placeholder="请选择">
            <el-option
              v-for="item in typeList"
              :key="item.etId"
              :label="item.typeName"
              :value="item.etId">
            </el-option>
           </el-select>
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
      <el-table-column label="企业名称" align="center" prop="enterpriseName"  />
      <el-table-column label="企业类型" align="center" prop="enTypeName"  />
      <el-table-column label="创建时间" align="center" prop="createTime"  />
      <el-table-column label="企业地址" align="center" prop="location"  />
      <el-table-column label="简介" align="center" prop="synopsis" :show-overflow-tooltip="true" />
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




   <el-dialog :close-on-click-modal="false" :title="title" :visible.sync="isOpen" width="500px" append-to-body>
      <el-form ref="form" :model="formValues" :rules="rules" label-width="80px">
        <el-form-item label="企业名称" prop="enterpriseName">
          <el-input v-model="formValues.enterpriseName" placeholder="请输入名称" />
        </el-form-item>

        <el-form-item label="企业类型" prop="location">
          <el-select v-model="formValues.enTypeId" placeholder="请选择">
            <el-option
              v-for="item in typeList"
              :key="item.etId"
              :label="item.typeName"
              :value="item.etId">
            </el-option>
           </el-select>
        </el-form-item>

        <el-form-item label="企业地址" prop="location">
          <el-input v-model="formValues.location" placeholder="请输入企业地址" />
        </el-form-item>

        <el-form-item label="简介" prop="enterpriseName">
          <el-input  type="textarea" :rows="4" v-model="formValues.synopsis" placeholder="请输入简介" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" :loading="formLoading" @click="submitForm">确 定</el-button>
        <el-button @click="isOpen = false">取 消</el-button>
      </div>
    </el-dialog>



  </div>
</template>

<script>
import API from "@/api/system/enterPrise";

export default {
  name: 'demandType',
  data() {
    return {
      loading: false,
      dataList: [],

      queryParams: {
        name: undefined,
        enTypeId: undefined
      },

      typeList: [],
      isCreate: true,
      actionRow: {},
      formLoading: false,
      isOpen: false,
      formValues: {
        enterpriseName: '',
        location: '',
        synopsis: '',
        enTypeId: undefined
      },
      rules: {
        // enterpriseName: [
        //   { required: true, message: "请输入企业名称",   trigger: "blur" }
        // ],
        // location: [
        //   { required: true, message: "请输入企业地址",   trigger: "blur" }
        // ],
        // synopsis: [
        //   { required: true, message: "请输入简介",   trigger: "blur" }
        // ]
      }
    }
  },
  computed: {
    title() {
      if(this.isCreate) {
        return '新建'
      }
      return '编辑'
    },
  },
  created () {
    this.queryType()
    this.getList()
  },
  methods: {
    async queryType () {
      try {
        const { data } =  await API.type()
        console.log(data)
        this.typeList = data || []
      } catch (err) {
        throw err
      }
    },
    initList () {
      this.queryParams.name = undefined
      this.queryParams.enTypeId = undefined
      this.getList({
        page: 1
      })
    },

    handleEdit(row) {
      this.isCreate = false
      this.isOpen = true
      this.actionRow = row
      this.formValues.enterpriseName= row.enterpriseName
      this.formValues.location= row.location
      this.formValues.synopsis= row.synopsis
      this.formValues.enTypeId = row.enTypeId
    },

    handleCreate () {
      this.isCreate = true
      this.isOpen = true
      this.formValues.enterpriseName= ''
      this.formValues.location= ''
      this.formValues.synopsis= ''
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

    async handleRemove(row) {
      try {
        const { data } =  await API.remove(row)
        this.getList()
      } catch (err) {
        throw err
      } finally {
         this.loading = false
      }
    },

    async submitForm() {
      this.formLoading = true
      try {
        await this.$refs.form.validate()
        const params = {... this.formValues}

        let ret
        if (this.isCreate) {
          ret = await API.create(params)
        } else {
          params.enterpriseId = this.actionRow.enterpriseId
          ret = await API.update(params)
        }

        if (ret.code !== 200) return false
        this.isOpen = false
        this.getList()
      } catch (err) {
        throw err
      } finally {
        this.formLoading = false
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
