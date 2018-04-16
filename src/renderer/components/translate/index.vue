<template>
  <div class="container" id="container">
    <ElCol :span="6" class="left fullHeight">
      <side-bar :types="dictTypes" key="sidebar"></side-bar>
    </ElCol>
    <ElCol :span="18" class="right fullHeight">
      <Translate />
    </ElCol>
  </div> 
</template>

<script>
  import { Row, Col } from 'element-ui'
  import SideBar from './components/sidebar'
  import Translate from './components/translate'

  export default {
    data () {
      return {
        dictTypes: [
          {type: 'youdao', name: '有道'},
          {type: 'baidu', name: '百度'}
        ]
      }
    },
    components: {
      SideBar,
      Translate,
      ElCol: Col,
      ElRow: Row
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html,body,.container {
    height: 100%;
  }
  .fullHeight {
    height: 100%;
  }
  .fullWidth {
    width: 100%;
  }
  .left {
    text-align: center;
    border-right: darkblue solid 1px;
  }
  .left>div {
    height: 100% !important;
  }
</style>
