
<script>
import CommonList from '@/components/CommonList'
import API from "@/api/system/policy"

export default {
  name: 'index.vue',
  render () {
    const columns = [
      {
        label: '政策名称',
        prop: 'policyName'
      },
      {
        label: '颁发部门',
        prop: 'depName'
      },
      {
        label: '颁发时间',
        prop: 'promulgateTime'
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
        label: '上传材料地址',
        prop: 'materialUrl'
      },
    ]
    return <CommonList columns={columns} api={API} />
  }
}
</script>
