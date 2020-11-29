<template>
  <div class="news-form">
    <el-form ref="form" :model="formData" :rules="rules" label-width="120px">
      <el-form-item label="新闻标题" prop="title">
        <el-input style="width: 400px" placeholder="请输入标题标题" v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="新闻类型" prop="author">
        <el-select style="width: 400px" placeholder="请输入新闻作者" v-model="formData.typeIds" multiple>
          <el-option
            v-for="item in typeList"
            :key="item.typeId"
            :label="item.typeName"
            :value="item.typeId">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="新闻作者" prop="author">
        <el-input  style="width: 400px" placeholder="请输入新闻作者" v-model="formData.author"></el-input>
      </el-form-item>
      <el-form-item label="新闻来源">
        <el-input  style="width: 400px" placeholder="请输入新闻来源" v-model="formData.messageSource"></el-input>
      </el-form-item>
      <el-form-item label="新闻内容">
        <Editor :minHeight="400" v-model="formData.content" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" :loading="formLoading">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Editor from '@/components/Editor'
import API from "@/api/system/news.js";

export default {
  components: {
    Editor
  },
  data() {
    return {
      formLoading: false,
      typeList: [],
      formData: {
        title: '',
        author: '',
        content: '',
        messageSource: '',
        typeIds: []
      },
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'change' }
        ]
      }
    };
  },
  computed: {
    newsId () {
      const { newsId } = this.$route.query
      return newsId
    },
  },
  created () {
    this.queryType()

    if (this.newsId) {
      this.queryInfo()
    }
  },
  methods: {
    async queryInfo () {
      try {
        const { data } =  await API.info({ newsId: this.newsId })
        console.log(data)
        if (data && data.length > 0) {
          const info = data[0]
          Object.keys(this.formData).forEach(key => {
            this.formData[key] = info[key]
          })
          if (info.typeList && info.typeList.length > 0) {
            this.formData.typeIds = info.typeList.map(item => {
              return item.typeId
            })
          }
          console.log(this.formData)
        }
      } catch(err){
        throw err
      }
    },
    async queryType () {
      try {
        const { data } =  await API.type()
        this.typeList = data
      } catch (err) {
        throw err
      }
    },
    async onSubmit() {
      this.formLoading = true
      try {
        await this.$refs.form.validate()
        const params = {... this.formData}

        let ret
        if (this.newsId) {
          params.newsId = this.newsId
          ret = await API.update(params)
        } else {
          ret = await API.create(params)
        }
        if (ret.code !== 200) return false
        this.isOpen = false
        this.$router.push('/news')
      } catch (err) {
        throw err
      } finally {
        this.formLoading = false
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .news-form{
    padding: 20px;
    padding-top: 40px;
  }
</style>
