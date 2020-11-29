
<script>
import CommonList from '@/components/CommonList'
import API from "@/api/system/resouurce";

export default {
  name: 'index.vue',
  render () {
    const columns = [
      {
        label: '项目名字',
        prop: 'resourceName'
      },
      {
        label: '年度安排',
        prop: 'annualPlan'
      },
      {
        label: '主管部门',
        prop: 'competentDept'
      },
      {
        label: '城市',
        prop: 'regionName'
      },
      {
        label: '资料地址',
        prop: 'materialUrl'
      },
    ]
    return <CommonList columns={columns} api={API} />
  }
}
</script>
