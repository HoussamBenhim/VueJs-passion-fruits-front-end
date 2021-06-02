<template>
  <button
    @click="$emit('click-event')"
    type="button"
    class="outline-none focus:outline-none"
  >
    <div
      id="close-button"
      class="bg-white w-10 p-2 focus:outline-none border-2 border-gray-200 rounded-full"
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
