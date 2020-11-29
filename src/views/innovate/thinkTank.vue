
<script>
import CommonList from '@/components/CommonList'
import API from "@/api/system/thinkTank";

export default {
  name: 'index.vue',
  render () {
    const columns = [
      {
        label: '智库名称',
        prop: 'name'
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
        label: '研究领域',
        prop: 'researchField'
      },
      {
        label: '代表人物',
        prop: 'representativePersonage'
      },
      {
        label: '组织机构',
        prop: 'institutionalFramework'
      },
    ]
    return <CommonList columns={columns} api={API} />
  }
}
</script>
