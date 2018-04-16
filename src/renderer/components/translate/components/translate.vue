<template>
  <Row id="translate" class="translate">
    <Row class="textarea english">
      <ElInput type="textarea" resize="none" />
    </Row>
    <Row class="options">
      <ElCol span="12">
        <ElSelect class="fullHeight fullWidth" :change="langChange" v-model="current">
          <ElOption 
            v-for="item in lang" 
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </ElOption>
        </ElSelect>
      </ElCol>
      <ElCol span=12>
        <ElButton class="fullHeight fullWidth"/>
      </ElCol>
    </Row>
    <Row class="textarea chinese">
      <ElInput type="textarea" readonly resize="none" />
    </Row>
  </Row>
</template>
<script>
  import { Input, Button, Row, Col, Select, Option } from 'element-ui'

  export default {
    data () {
      return {
        res: this.$store.state.translate.res,
        current: this.$store.state.translate.currentLang,
        lang: [{
          label: '中 => 英',
          value: 'zh => en'
        }, {
          label: '英 => 中',
          value: 'en => zh'
        }]
      }
    },
    methods: {
      langChange: (lang) => {
        this.$store.commit('CURRENT_LANG_CHANGE', lang)
      }
    },
    computed: {
      from: () => {
        
      },
    },
    components: {
      ElInput: Input,
      ElButton: Button,
      Row,
      ElCol: Col,
      ElSelect: Select,
      ElOption: Option
    }
  }
</script>
<style>
.translate {
    width: 100%;
    height: 100%;
    /* background-color: darkgray; */
}
.textarea {
  height: 43%;
}
.textarea div, .textarea textarea {
  height: 100%;
}
.options {
  height: 10%;
  text-align: center;
}
</style>