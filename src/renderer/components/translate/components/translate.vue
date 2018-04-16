<template>
  <Row id="translate" class="translate">
    <Row class="textarea">
      <ElInput type="textarea" resize="none" v-model="q" />
    </Row>
    <Row class="options">
      <ElCol span=12>
        <ElSelect class="fullHeight fullWidth" :change="langChange" :value="current">
          <ElOption 
            v-for="item in lang" 
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </ElOption>
        </ElSelect>
      </ElCol>
      <ElCol span=12 class="fullHeight">
        <ElButton class="fullHeight fullWidth" type="primary" @click="translate">翻译</ElButton>/>
      </ElCol>
    </Row>
    <Row class="textarea">
      <ElInput type="textarea" readonly resize="none" :value="res" />
    </Row>
  </Row>
</template>
<script>
  import { Input, Button, Row, Col, Select, Option } from 'element-ui'

  export default {
    data () {
      return {
        q: '',
        lang: [{
          label: '自动',
          value: 'auto => auto'
        }, {
          label: '中 => 英',
          value: 'zh => en'
        }, {
          label: '英 => 中',
          value: 'en => zh'
        }]
      }
    },
    methods: {
      langChange (lang) {
        this.$store.commit('CURRENT_LANG_CHANGE', lang)
      },
      translate () {
        this.$store.dispatch('doTranslate', {
          q: this.q,
          from: this.from,
          to: this.to
        })
      }
    },
    computed: {
      res: function () {
        return this.$store.state.translate.res
      },
      current: function () {
        return this.$store.state.translate.currentLang
      },
      from: function () {
        return this.current.split('=>')[0].trim()
      },
      to: function () {
        return this.current.split('=>')[1].trim()
      }
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
  height: 45%;
}
.textarea div, .textarea textarea {
  height: 100%;
}
.options {
  height: 40px;
  text-align: center;
}
</style>