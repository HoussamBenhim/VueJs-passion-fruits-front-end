<template>
  <div class="w-full flex flex-col">
    <p class="font-bold tracking-wider text-xl md:text-2xl z-10">
      {{ hello }}
    </p>
    <div
      :class="{
        'border-primary': currentPathName,
        'border-secondary': !currentPathName,
        'border-4  -mt-2 z-0': true,
      }"
    ></div>
  </div>
</template>

<script>
export default {
  computed: {
    hello() {
      const now = new Date()
      return now.getHours() >= 17 ? 'Bonsoir' : 'Bonjour'
    },
    currentPathName() {
      return this.getCurrentPath() === 'fruits' || this.getCurrentPath() === ''
    },
  },
  methods: {
    getCurrentPath() {
      return this.$nuxt.$route.path.substring(1)
    },
  },
}
</script>

<style lang="css" scoped></style>
