<script>
import {
  listData,
  getData,
  delData,
  addData,
  updateData,
  exportData,
} from "@/api/system/dict/data";
import CommonList from '@/components/CommonList'
import API from "@/api/system/warIndustry";

export default {
  name: "Data",
  components: { 
    CommonList,
  },
  render (h) {
    const columns = [
      {
        label: '成果名称',
        prop: 'achievementName'
      },
      {
        label: '成果类型',
        prop: 'resultsType'
      },
      {
        label: '简介',
        prop: 'synopsis'
      },
      {
        label: '成果展示',
        prop: 'content'
      },
      {
        label: '图片',
        prop: 'contentImg'
      },
      {
        label: '所属领域',
        prop: 'domain'
      },
      {
        label: '发布方',
        prop: 'publisherId'
      },
      {
        label: '分析',
        prop: 'analysis'
      },
      {
        label: '联系电话',
        prop: 'phone'
      },
      {
        label: '材料地址其他',
        prop: 'materialUrl'
      },
      {
        label: '联系人',
        prop: 'contacts'
      },
      {
        label: '电话',
        prop: 'phone'
      }
    ]
    return (<CommonList columns={ columns } api={ API } />)
  },
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
        demandType: undefined,
        domainId: undefined,
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
        demandName:this.queryParams.demandName?this.queryParams.demandName:null,
        demandType:this.queryParams.demandType?this.queryParams.demandType:null,
        domainId:this.queryParams.domainId?this.queryParams.domainId:null,
        endTime:this.value1?this.endTime:null,
        startTime:this.value1?this.startTime:null,
        limit :this.queryParams.limit,
        page:this.queryParams.page
      }
      this.$api.Demand.getlist(obj).then((res) => {
        // console.log(res)
        if (res.code == 200) {
          this.dataList = res.data.demandList;
          this.num=Number(res.data.totalNumber) 

          this.loading = false;
        }
      });
    },
    //审核
    handleUpdate(scope){
        this.open=true
        this.demandId=scope.demandId
    },
    submitForm(){
        var obj={
          id:this.demandId,
          status:this.form.status,
          comment:this.form.comment
          
        }
         this.$api.Demand.ifok(obj).then((res) => {
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