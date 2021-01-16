<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div v-html="svg">
    <slot></slot>
  </div>
</template>

<script>
import feather from 'feather-icons'
export default {
  name: 'BaseIcon',
  props: {
    name: {
      type: String,
      default: 'user',
    },
    width: {
      type: [Number, String],
      default: 22,
    },
    height: {
      type: [Number, String],
      default: 22,
    },
    color: {
      type: String,
      default: 'black',
    },
  },
  computed: {
    svg() {
      return feather.icons[this.name].toSvg({
        class: 'icon',
        width: this.width,
        height: this.height,
        color: this.color,
      })
    },
  },
}
</script>

<style scoped>
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
}
.icon {
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  margin-right: 6px;
}
</style>
