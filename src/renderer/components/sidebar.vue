<template>
  <div class="sidebar" id="sidebar">
    <el-radio-group id="dictType" v-if="types.length">
      <el-radio v-for="(item, key) in types" :key="{key}" @click="changeType" value="item.type" name="types">{{ item.name }}</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
import { Radio } from 'element-ui'

export default {
  props: ['types', 'checked'],
  methods: {
    changeType (event) {
      this.cheked = event.target.value
    }
  },
  components: {
    Radio
  }
}
</script>

<style>
.type {
  color: black;
}
.active {
  color: green;
}
</style>
