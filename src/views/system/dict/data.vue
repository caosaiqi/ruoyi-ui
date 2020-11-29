
<script>
import CommonList from '@/components/CommonList'
import API from "@/api/system/opensource";

export default {
  name: "Data",
  components: { 
    CommonList,
  },
  render (h) {
    const columns = [
      {
        label: '深度分析',
        prop: 'analysis'
      },
      {
        label: '负责人',
        prop: 'businessOwner'
      },
      {
        label: '联系人',
        prop: 'contacts'
      },
      {
        label: '需求名字',
        prop: 'demandName'
      },
      {
        label: '需求说明',
        prop: 'description'
      },
      {
        label: '所属领域',
        prop: 'domain'
      },
      {
        label: '经费',
        prop: 'expenditure'
      },
      {
        label: '附属文件',
        prop: 'materialUrl'
      },
      {
        label: '联系电话',
        prop: 'phone'
      },
      {
        label: '发布方',
        prop: 'publisherId'
      },
      {
        label: '发布人',
        prop: 'publishUId'
      }
    ]
    return (<CommonList columns={ columns } api={ API } />)
  },
};
</script>