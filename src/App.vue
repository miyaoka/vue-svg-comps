<template>
  <div>
    <spiral-path/>
    <spiral-text/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SpiralText from '@/example/SpiralText.vue'
import SpiralPath from '@/example/SpiralPath.vue'

export default Vue.extend({
  name: 'app',
  components: {
    SpiralText,
    SpiralPath
  },
  data: function () {
    return {
    }
  }
})
</script>

<style>
</style>
