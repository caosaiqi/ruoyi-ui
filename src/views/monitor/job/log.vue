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
import API from "@/api/system/jobLog";

export default {
  name: "Data",
  components: { 
    CommonList,
  },
  render () {
    const columns = [
      {
        label: '需求类型',
        prop: 'typeName'
      },
      {
        label: '项目内容',
        prop: 'content'
      },
      {
        label: '所属领域',
        prop: 'domainName'
      },
      {
        label: '材料地址',
        prop: 'materialUrl'
      },
      {
        label: '项目名称',
        prop: 'projectName'
      },
      {
        label: '发布方',
        prop: 'publisherName'
      },
      {
        label: '简介',
        prop: 'synopsis'
      },
      {
        label: '发布方',
        prop: 'publishUname'
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
