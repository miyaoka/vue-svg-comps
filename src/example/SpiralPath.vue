<template>
  <div>
    <input
      class="range"
      type="range"
      min="1"
      max="100"
      step="any"
      v-model.number="span"
      style="width:100%"
    />
    <input
      class="range"
      type="range"
      min="1"
      :max="span"
      step="any"
      v-model.number="strokeWidth"
      style="width:100%"
    />
    <input
      class="range"
      type="range"
      min="32"
      max="500"
      step="any"
      v-model.number="size"
      style="width:100%"
    />
    <input
      class="range"
      type="range"
      min="0"
      max="360"
      step="any"
      v-model.number="initAngle"
      style="width:100%"
    />
    <input
      type="checkbox"
      v-model="startFromInner"
    />
    <spiral-path
      :span="span"
      :size="size"
      :strokeWidth="strokeWidth"
      :init-angle="initAngle"
      :start-from-inner="startFromInner"
      stroke="#fff"
      style="background:#000"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SpiralPath from '@/components/SpiralPath.vue'

export default Vue.extend({
  name: 'app',
  components: {
    SpiralPath
  },
  data: function () {
    return {
      span: 20,
      strokeWidth: 1,
      size: 200,
      initAngle: 0,
      startFromInner: false
    }
  }
})
</script>

<style>
</style>
