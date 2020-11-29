<template>
  <el-dialog :visible.sync="visible" title="审核" width="500px" :modal-append-to-body="false">
    <el-form ref="form" label-width="80px" :rules="rules">
      <el-form-item label="审核说明">
        <el-input v-model="form.comment" />
      </el-form-item>

      <el-form-item label="审核状态">
        <el-select placeholder="请选择状态"  v-model="form.status">
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

    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submit">确 定</el-button>
      <el-button @click="cancel">取 消</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'DialogCheck',
  props: {
    row: Object,
    visible: Boolean,
    fetchUpdate: Function
  },
  data () {
    return {

      // 表单参数
      form: {
        comment: "",
        status: "2"
      },

      // 表单校验
      rules: {
        comment: [
          { required: true, message: "", trigger: "blur" }
        ],
        status: [
          { required: true, message: "数据顺序不能为空", trigger: "blur" }
        ]
      }
    }
  },
  methods: {
    cancel()  {
      this.$emit('cancel')
    },
    submit() {
      this.fetchUpdate({
        id: this.row.id,
        ...this.form
      })
    }
  }
}
</script>

<style>

</style>
