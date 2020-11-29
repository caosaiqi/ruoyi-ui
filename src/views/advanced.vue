<script>
import {
  listData,
  getData,
  delData,
  addData,
  updateData,
  exportData,
} from "@/api/system/dict/data";

import CommonList from '@/components/CommonList'
import API from "@/api/system/advanced";

export default {
  name: "Data",
  components: { 
    CommonList,
  },
  render () {
    const columns = [
      {
        label: '技术名称',
        prop: 'technologyName'
      },
      {
        label: '技术类型',
        prop: 'technologyTypeName'
      },
      {
        label: '特点特色',
        prop: 'trait'
      },
      {
        label: '应用',
        prop: 'apply'
      },
      {
        label: '图片\视频',
        prop: 'contentImg'
      },
      {
        label: '所属领域',
        prop: 'domainName'
      },
      {
        label: '数据包材料',
        prop: 'materialUrl'
      },
      {
        label: '技术成熟度',
        prop: 'maturity'
      },
      {
        label: '发布方',
        prop: 'publisherName'
      },
      {
        label: '发布人',
        prop: 'publishUname'
      }
    ]
    return (<CommonList columns={ columns } api={ API } />)
  },
};
</script>
