<template>
  <div class="flex flex-col">
    <div class="border h-50">tag video</div>
    <div class="border">adress component</div>
    <div class="border">hero</div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('navBarModule/hideNavbar')
  },
}
</script>

<style lang="scss" scoped></style>
