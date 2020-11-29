
<script>
import CommonTypeList from '@/components/CommonTypeList'
import API from "@/api/system/resultsType";

export default {
  name: 'demandType',
  render () {
    return <CommonTypeList  api={API}/>
  }
}
</script>
