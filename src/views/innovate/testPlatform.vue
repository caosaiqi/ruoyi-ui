<script>
import CommonList from '@/components/CommonList'
import API from "@/api/system/testPlatform";

export default {
  name: 'index.vue',
  render () {
    const columns = [
      {
        label: '机构名称',
        prop: 'platformName'
      },
      {
        label: '主要特色',
        prop: 'trait'
      },
      {
        label: '详细情况',
        prop: 'detailedCase'
      },
      {
        label: '详细案例',
        prop: 'detailedCaseUrl'
      },
      {
        label: '相关领域',
        prop: 'correlationDomain'
      },
      {
        label: '城市',
        prop: 'regionName'
      },
      {
        label: '数据包材料',
        prop: 'materialUrl'
      }
    ]
    return <CommonList columns={columns} api={API} />
  }
}
</script>