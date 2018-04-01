<template>
  <div>
    <RadioGroup id="dictType" v-if="types.length" v-model="current" >
      <ElRow v-for="item of types" :key="item.type">
        <ElRadio :label="item.type" name="types" class="type" border>{{ item.name }}</ElRadio>
      </ElRow>
    </RadioGroup>
  </div>
</template>

<script>
import { Radio, RadioGroup, Row } from 'element-ui'

export default {
  props: ['types'],
  components: {
    ElRow: Row,
    ElRadio: Radio,
    RadioGroup
  },
  data () {
    return {
      current: 'youdao'
    }
  }
}
</script>

<style>
.type {
  color: black;
  padding: 10px 0;
  margin: 5px 0;
  text-align:center;
}
.active {
  color: green;
}
</style>
