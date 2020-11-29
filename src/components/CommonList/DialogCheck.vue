<template>
  <el-dialog  width="500px" append-to-body>
    <el-form ref="form" label-width="80px">
      <el-form-item label="审核说明">
        <el-input v-model="form.comment" />
      </el-form-item>

      <el-form-item label="审核状态" v-model="form.status">
        <el-select placeholder="请选择状态">
          <el-option
            label="通过"
            value='2'
          ></el-option>
          <el-option
            label="不通过"
            value='3'
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  name: 'DialogCheck',
  data() {
    return {
      // 表单参数
      form: {
        comment: "",
        status: ""
      },

      // 表单校验
      rules: {
        dictLabel: [
          { required: true, message: "数据标签不能为空", trigger: "blur" }
        ],
        dictValue: [
          { required: true, message: "数据键值不能为空", trigger: "blur" }
        ],
        dictSort: [
          { required: true, message: "数据顺序不能为空", trigger: "blur" }
        ]
      }
    }
  }
}
</script>

<style>

</style>
