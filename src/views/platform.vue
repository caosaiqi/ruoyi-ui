<template>
  <div class="app-container">
    <el-form
      :model="queryParams"
      ref="queryForm"
      :inline="true"
      v-show="showSearch"
      label-width="68px"
    >
      <el-form-item label="平台名称" prop="dictType"  >
        <el-input v-model="queryParams.demandName" size="small" clearable  placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item label="时间" prop="dictLabel">
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          size="small"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          clearable
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="审核状态">
        <el-select v-model="queryParams.auditStatus" placeholder="请选择状态">
          <el-option
            label="通过"
            value='2'
           
          ></el-option>
          <el-option
            label="不通过"
            value='3'
           
          ></el-option>
          <el-option
            label="审核中"
            value='1'
           
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button
          type="cyan"
          icon="el-icon-search"
          size="mini"
          @click="handleQuery"
          >搜索</el-button
        >
        <!-- <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button> -->
      </el-form-item>
    </el-form>
<!-- 
    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['system:dict:add']"
          >新增</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['system:dict:edit']"
          >修改</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['system:dict:remove']"
          >删除</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:dict:export']"
          >导出</el-button
        >
      </el-col>
      <right-toolbar
        :showSearch.sync="showSearch"
        @queryTable="getList"
      ></right-toolbar>
    </el-row> -->
    <el-table
      v-loading="loading"
      :data="dataList"
    
    >
      <!-- <el-table-column type="selection" width="55" align="center" /> -->
      <el-table-column label="平台名称" align="center" prop="platformName" :show-overflow-tooltip="true" />
      <el-table-column label="平台简介" align="center" prop="trait" :show-overflow-tooltip="true" />
      <el-table-column label="领域" align="center" prop="domainName" />
      <el-table-column label="发布类型" align="center" prop="typeName" />
      <el-table-column
        label="发布方"
        align="center"
        prop="publisherName"
      />
      <el-table-column
        label="数据包材料"
        align="center"
        prop="analysis"
        
      >
      <template slot-scope="scope">
          <a :href="scope.row.materialUrl" download="">数据材料</a>
        </template>
        </el-table-column     >
      <el-table-column
        label="创建时间"
        align="center"
        prop="createTime"
        width="180"
      >
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.createTime) }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="handleUpdate(scope.row)"
           v-if="scope.row.auditStatus=='1'" >审核</el-button
          >
           <el-button size="mini" type="text" 
           v-if="scope.row.auditStatus=='2'" >审核通过</el-button
          >
           <el-button size="mini" type="text" 
           v-if="scope.row.auditStatus=='3'" >审核不通过</el-button
          >
          <!-- <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:dict:remove']"
            >删除</el-button
          > -->
        </template>
      </el-table-column>
    </el-table>

<div style="margin-top:20px">


    <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-sizes="[10, 20, 30, 50]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="num"
        ></el-pagination>
</div>
    <!-- 添加或修改参数配置对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="审核说明">
          <el-input v-model="form.comment" />
        </el-form-item>
        
        <el-form-item label="审核状态">
        <el-select v-model="form.status" placeholder="请选择状态">
          <el-option
            label="通过"
            value='2'
           
          ></el-option>
          <el-option
            label="不通过"
            value='3'
           
          ></el-option>
        </el-select>
      </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  listData,
  getData,
  delData,
  addData,
  updateData,
  exportData,
} from "@/api/system/dict/data";

export default {
  name: "Data",
  data() {
    return {
      value1: "",
      typelist: [],
      ltypelist: [],
      demandId:'',
      endTime:'',
      startTime:'',
      currentPage1:1,
      num:0,
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 字典表格数据
      dataList: [],
      // 默认字典类型
      defaultDictType: "",
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 状态数据字典
      statusOptions: [],
      // 类型数据字典
      typeOptions: [],
      // 查询参数
      queryParams: {
        page: 1,
        limit: 10,
        auditStatus: undefined,
        status: undefined,
      },
      // 表单参数
      form: {
        comment:'',
        status:'',
      },
      // 表单校验
      rules: {
        dictLabel: [
          { required: true, message: "数据标签不能为空", trigger: "blur" },
        ],
        dictValue: [
          { required: true, message: "数据键值不能为空", trigger: "blur" },
        ],
        dictSort: [
          { required: true, message: "数据顺序不能为空", trigger: "blur" },
        ],
      },
    };
  },
  created() {
    // const dictId = this.$route.params && this.$route.params.dictId;
    // this.getType(dictId);
    // this.getTypeList();
    // this.getDicts("sys_normal_disable").then(response => {
    //   this.statusOptions = response.data;
    // });
    this.getType();
    this.getList();
  },
  methods: {
    getType() {
      /** 需求类型 */
      this.$api.Demand.demandlist().then((res) => {
        this.typelist = res.data;
      });
      /** 领域类型 */
      this.$api.Demand.demandGlist().then((res) => {
        this.ltypelist = res.data;
      });
    },
    p(s) {
      return s < 10 ? "0" + s : s;
    },
    handleQuery(){
      if (this.value1) {
        var d = new Date(this.value1[0]);
        this.startTime =
          d.getFullYear() +
          "-" +
          this.p(d.getMonth() + 1) +
          "-" +
          this.p(d.getDate());

         var d = new Date(this.value1[1]);
        this.endTime =
          d.getFullYear() +
          "-" +
          this.p(d.getMonth() + 1) +
          "-" +
          this.p(d.getDate());

      }
this.pageIndex=1
      this.currentPage1 = 1;
      this.getList()
    },
    /** 获取需求列表 */
    getList() {
      this.loading = true;
      var obj={
        platformName:this.queryParams.demandName?this.queryParams.demandName:null,
        auditStatus:this.queryParams.auditStatus?this.queryParams.auditStatus:null,
        endTime:this.value1?this.endTime:null,
        startTime:this.value1?this.startTime:null,
        pageSize :this.queryParams.limit,
        pageNum:this.queryParams.page
      }
      this.$api.Platform.platformlist(obj).then((res) => {
        // console.log(res)
        if (res.code == 200) {
          this.dataList = res.data.list;
          this.num=Number(res.data.total) 

          this.loading = false;
        }
      });
    },
    //审核
    handleUpdate(scope){
        this.open=true
        this.demandId=scope.communalId
    },
    submitForm(){
        var obj={
          communalId:this.demandId,
          auditStatus:this.form.status,
          comment:this.form.comment
          
        }
         this.$api.Platform.ifok(obj).then((res) => {
        console.log(res)
       
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
  handleSizeChange(val) {
        this.queryParams.limit=val
        this.getList()
      },
      handleCurrentChange(val) {
        this.queryParams.page=val
        this.getList()
      }
  },
};
</script>