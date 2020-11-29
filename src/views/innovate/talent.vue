<script>
import CommonList from '@/components/CommonList'
import API from "@/api/system/talent";

export default {
  name: 'index.vue',
  render () {
    const columns = [
      {
        label: '姓名',
        prop: 'talentName'
      },
      {
        label: '简介',
        prop: 'synopsis'
      },
      {
        label: '特长',
        prop: 'speciality'
      },
      {
        label: '单位',
        prop: 'institution'
      },
      {
        label: '相关领域',
        prop: 'correlationDomain'
      },
      {
        label: '数据包材料',
        prop: 'materialUrl'
      },
      {
        label: '城市',
        prop: 'regionName'
      },
      {
        label: '所属领域',
        prop: 'domainId'
      }
    ]
    return <CommonList columns={columns} api={API} />
  }
}
</script>