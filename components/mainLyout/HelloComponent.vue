<template>
  <div class="w-full flex flex-col">
    <p class="font-bold tracking-wider text-xl md:text-2xl z-10">
      {{ hello }}
    </p>
    <div class="border-4 border-primary -mt-2 z-0"></div>
  </div>
</template>

<script>
export default {
  computed: {
    hello() {
      const now = new Date()
      return now.getHours() >= 17 ? 'Bonsoir' : 'Bonjour'
    },
  },
}
</script>

<style lang="css" scoped></style>
