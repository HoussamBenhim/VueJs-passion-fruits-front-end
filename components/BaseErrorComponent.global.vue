<template>
  <div>
    <div class="w-full h-72 flex flex-col items-center justify-center">
      <div
        class="bg-primary w-40 h-40 rounded-full p-10 border-2 border-gray-300"
      >
        <BaseIcon name="frown" width="80" height="80" />
      </div>
      <div
        class="w-full h-10 text-center mt-5 text-xl font-semibold font-serif"
      >
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['message'],
}
</script>

<style lang="css" scoped></style>
