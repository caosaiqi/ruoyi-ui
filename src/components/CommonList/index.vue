
<script>
import * as R from 'ramda'
import DialogCheck from './DialogCheck'
import SearchBox from './SearchBox'

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
      actionRow: {},
      loading: true,
      dialogCheckVisible: false,
      typeOptions: [],
      // 查询参数
      queryParams: {
        page: 1,
        limit: 10,
      },

      dataList: [],
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

    async submitForm(params) {
      try {
        const { code } = await this.api.update(params)
        if (code === 200) {
          this.dialogCheckVisible = false
        }
      } catch (err) {
        throw err
      }
    },

    handleSizeChange(val) {
      this.queryParams.limit = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.queryParams.page = val;
      this.getList();
    },
    doSearch (val) {
      const _searchParams = R.clone(val)
      const query = R.forEachObjIndexed((value, key) => {
        if (value === '') delete _searchParams[key]
      }, _searchParams)
      this.getList(_searchParams)
    }
  },
  render () {
    const tableProps = {
      data: this.dataList
    }

    const RenderColumns = () =>{
      return this.columns.map(item => {
        const props = {
          align:'center',
          showOverflowTooltip: true,
          ...item,
        }
        return <el-table-column  {...{ props }} />
      })
    }

    const RenderColumAction = () => {
      const handleClick = (row) => {
        this.dialogCheckVisible = true
        this.actionRow = row
      }
      const scopedSlots = {
        default: ({ row }) => {
          const texts = {
            1: '审核',
            2: '审核通过',
            3: '审核不通过'
          }
          const types = {
            2: 'success',
            3: 'danger'
          }
          if (row.status == 1) {
            return (
              <el-button onClick={() => handleClick(row)} size="mini" type="text">审核</el-button>
            )
          }

          return <el-tag size="mini"  type={types[row.status]}> {texts[row.auditStatus]} </el-tag>
        }
      }
      return <el-table-column label='操作' {...{scopedSlots}} />
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

    return (
      <div class="app-container">
        <SearchBox onSearch={ this.doSearch } />
        <el-table {...{ props: tableProps }}>
          <RenderColumns />
          <RenderColumAction />
        </el-table>
        <RenderPagination />
        <DialogCheck
          row={this.actionRow}
          fetchUpdate={ this.submitForm }
          onCancel={() => this.dialogCheckVisible = false}
          visible={this.dialogCheckVisible} />
      </div>
    )
  }
};
</script>
