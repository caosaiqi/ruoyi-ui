
<script>
import CommonTypeList from '@/components/CommonTypeList'
import API from "@/api/system/domain";

export default {
  name: 'demandType',
  render () {
    return <CommonTypeList  api={API}/>
  }
}
</script>
