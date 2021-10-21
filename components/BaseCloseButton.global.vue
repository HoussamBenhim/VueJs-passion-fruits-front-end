<template>
  <button
    type="button"
    class="outline-none focus:outline-none"
    @click="$emit('click-event')"
  >
    <div
      id="close-button"
      class="bg-white w-10 p-2 focus:outline-none shadow-lg rounded-full"
    >
      <BaseIcon name="x" />
    </div>
  </button>
</template>

<script>
export default {
  inheritAttrs: false,
}
</script>

<style lang="css" scoped></style>
