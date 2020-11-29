
<script>
import CommonList from '@/components/CommonList'
import API from "@/api/system/tabNewTechnologyPolicyManager";

export default {
  name: 'index.vue',
  render () {
    const columns = [
      {
        label: '政策名称',
        prop: 'policyName'
      }
    ]
    return <CommonList columns={columns} api={API} />
  }
}
</script>
