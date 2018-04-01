<template>
  <div class="container" id="container">
    <ElCol :span="6" class="sidebar">
      <side-bar :types="dictTypes" key="sidebar"></side-bar>
    </ElCol>
    <ElCol :span="18" class="translate">
    </ElCol>
  </div> 
</template>

<script>
  import { Row, Col } from 'element-ui'
  import SideBar from './sidebar'
  import Translate from './translate'

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
  .sidebar {
    text-align: center;
    height: 100%;
    width: 30%;
    display: inline-block;
    border-right: darkblue solid 1px;
  }
  .sidebar>div {
    height: 100% !important;
  }
</style>
