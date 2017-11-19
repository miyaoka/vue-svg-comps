 <template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="size"
    :height="size"
  >
    <spiral-path
      :span="fontSize * lineHeight"
      :size="size"
      :stroke-width="0"
      :path-id="`${pathIdPrefix}${_uid}`"
      :clip-outside="true"
      :clip-inside="true"
      :counterclockwise="counterclockwise"
      :init-angle="initAngle"
      :padding-outer="counterclockwise ? 0 : fontSize"
      :padding-inner="paddingInnerComputed"
      :start-from-inner="startFromInner"
    />
    <g
      :transform="translate"
    >
      <text
        :font-size="fontSize"
      >
        <textPath
          :href="`#${pathIdPrefix}${_uid}`"
        >{{text}}</textPath>
      </text>
    </g>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'
import SpiralPath from './SpiralPath.vue'

export default Vue.extend({
  name: 'SpiralText',
  components: {
    SpiralPath
  },
  data: function () {
    return {
      pathIdPrefix: 'path'
    }
  },
  props: {
    size: {
      type: Number,
      required: false,
      default: 16
    },
    fontSize: {
      type: Number,
      required: false,
      default: 12
    },
    lineHeight: {
      type: Number,
      required: false,
      default: 1.0
    },
    text: {
      type: String,
      required: false,
      default: ''
    },
    strokeWidth: {
      type: Number,
      required: false,
      default: 0
    },
    inToOut: {
      type: Boolean,
      required: false,
      default: false
    },
    counterclockwise: {
      type: Boolean,
      required: false,
      default: false
    },
    startFromInner: {
      type: Boolean,
      required: false,
      default: false
    },
    initAngle: {
      type: Number,
      required: false,
      default: 0 // degree
    },
    paddingInner: {
      type: Number,
      required: false
    }
  },
  computed: {
    halfSize (): number {
      return this.size / 2
    },
    translate (): string {
      return `translate(${this.halfSize} ${this.halfSize})`
    },
    paddingInnerComputed (): number {
      return this.paddingInner === undefined
      ? this.counterclockwise
        ? this.fontSize
        : 0
      : this.paddingInner
    }
  }
})

</script>

<style scoped>
</style>
