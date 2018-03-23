<template>
  <div class="container" id="container">
    <el-row>
      <el-col span=6 class="sidebar">
        <side-bar :types="dictTypes"></side-bar>
      </el-col>
      <el-col span=18 class="translate">
      </el-col>
    </el-row>
  </div> 
</template>

<script>
  import { Row, Col, Radio } from 'element-ui'
  import SideBar from './sidebar'
  import Translate from './translate'

  export default {
    data () {
      return {
        dictTypes: [
          {type: 'youdao', name: '有道'}
        ]
      }
    },
    components: {
      SideBar,
      Translate,
      Row,
      Col,
      Radio
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
    height: 100%;
    width: 30%;
    display: inline-block;
    background-color: darkgray;
  }
</style>
