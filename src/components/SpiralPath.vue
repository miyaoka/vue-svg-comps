<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="size"
    :height="size"
  >
    <g
      :transform="translate"
    >
      <path
        :id="pathId"
        :d="pathD"
        :stroke-width="strokeWidth"
        :style="style"
        :stroke="stroke"
        fill="none"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'
import Point from './Point'

const PI2: number = Math.PI * 2

export default Vue.extend({
  name: 'SpiralPath',
  data: function () {
    return {
    }
  },
  props: {
    pathId: {
      type: String,
      required: false
    },
    size: {
      type: Number,
      required: false,
      default: 100
    },
    // pixel per rotation
    span: {
      type: Number,
      required: false,
      default: 10
    },
    strokeWidth: {
      type: Number,
      required: false,
      default: 0
    },
    stroke: {
      type: String,
      required: false,
      default: 'black'
    },
    // direction in-to-out
    startFromInner: {
      type: Boolean,
      required: false,
      default: false
    },
    // direction clockwise
    counterclockwise: {
      type: Boolean,
      required: false,
      default: false
    },
    initAngle: {
      type: Number,
      required: false,
      default: 0 // degree
    },
    paddingOuter: {
      type: Number,
      required: false,
      default: 0
    },
    paddingInner: {
      type: Number,
      required: false,
      default: 0
    }
  },
  computed: {
    halfSize (): number {
      return this.size / 2
    },
    translate (): string {
      return `translate(${this.halfSize} ${this.halfSize})`
    },
    style (): string {
      const dir: number = this.counterclockwise ? -1 : 1
      return `transform: scale(1, ${dir}) rotate(${this.initAngle * dir}deg)`
    },
    pathD (): string {
      const tStep: number = PI2 / 4
      const rStep: number = this.span / PI2
      const maxR: number = this.halfSize - this.paddingOuter
      const minR: number = rStep + this.paddingInner
      const pts: Array<Point> = []

      let radius: number
      let t: number = 0

      if (this.startFromInner) {
        radius = minR
        while (radius <= maxR) {
          pts.push(new Point(Math.cos(t) * radius, Math.sin(t) * radius))
          t += tStep
          radius = minR + t * rStep
        }
      } else {
        radius = maxR
        while (radius >= minR) {
          pts.push(new Point(Math.cos(t) * radius, Math.sin(t) * radius))
          t += tStep
          radius = maxR - t * rStep
        }
      }

      const arcToList: Array<string> = pts.map((pt: Point, i: number, ary: Array<Point>) => {
        if (i <= 0) return ''
        const prevPt: Point = ary[i - 1]
        const arc: Point = pt.subtract(prevPt).abs()
        return `A ${arc.toString()} 0 0 1 ${pt.toString()}`
      })

      return `M ${pts[0].toArray().join(' ')} ${arcToList.join(' ')}`
    }
  }
})

</script>

<style scoped>
</style>
