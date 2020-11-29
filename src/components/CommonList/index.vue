
<script>

export default {
  name: "Data",
  props: {
    api: {
      type: Object
    },
    columns: {
      type: Array
    }
  },
  data() {
    return {
      loading: true,
      typeOptions: [],
      // 查询参数
      queryParams: {
        page: 1,
        limit: 10,
      },
      // 表单参数
      form: {
        comment: "",
        status: ""
      },

      dataList: [],
      // 表单校验
      rules: {
        dictLabel: [
          { required: true, message: "数据标签不能为空", trigger: "blur" }
        ],
        dictValue: [
          { required: true, message: "数据键值不能为空", trigger: "blur" }
        ],
        dictSort: [
          { required: true, message: "数据顺序不能为空", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList (params = {}) {
      this.loading = true
      try {
        const { data } =  await this.api.list({...this.queryParams, ...params})
        console.log(data)
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

    //审核
    handleUpdate(scope) {
      this.open = true;
      this.demandId = scope.demandId;
    },
    submitForm() {
      var obj = {
        id: this.demandId,
        status: this.form.status,
        comment: this.form.comment
      };
      this.$api.Demand.ifok(obj).then(res => {
        console.log(res);
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    handleSizeChange(val) {
      this.queryParams.limit = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.queryParams.page = val;
      this.getList();
    },
  },
  render () {
    console.log(this.dataList)
    const tableProps = {
      data: this.dataList
    }

    const RenderColumns = () =>{
      console.log(this.columns)
      return this.columns.map(item => {
        const props = {
          align:'center',
          ...item,
        }
        return <el-table-column  {...{ props }} />
      })
    }


    const RenderPagination = () => {
      return (
        <div>
          <el-pagination
            layout="total, sizes, prev, pager, next, jumper"
          ></el-pagination>
        </div>
      )
    }

    const RenderDialog = () => {
      return (
         <el-dialog  width="500px" append-to-body>
            <el-form ref="form" label-width="80px">
              <el-form-item label="审核说明">
                <el-input  />
              </el-form-item>

              <el-form-item label="审核状态">
              <el-select  placeholder="请选择状态">
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
          </el-dialog>
      )
    }
    return (
      <div class="app-container">
       <el-table {...{ props: tableProps }}>
          <RenderColumns />
        </el-table>
        <RenderPagination />
        <RenderDialog />
      </div>
    )
  }
};
</script>
