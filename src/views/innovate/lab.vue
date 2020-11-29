<script>
import CommonList from '@/components/CommonList'
import API from "@/api/system/lab";

export default {
  name: 'index.vue',
  render () {
    const columns = [
      {
        label: '实验室名称',
        prop: 'laboratoryName'
      },
      {
        label: '主要特色',
        prop: 'trait'
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
        label: '资料地址',
        prop: 'materialUrl'
      },
      {
        label: '设立时间',
        prop: 'establishedTime'
      },
      {
        label: '管理部门',
        prop: 'manageDept'
      },
      {
        label: '人数',
        prop: 'numberOfPeople'
      },
      {
        label: '研究领域',
        prop: 'researchDomain'
      },
    ]
    return <CommonList columns={columns} api={API} />
  }
}
</script>