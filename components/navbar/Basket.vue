<template>
  <div>
    <button
      id="user-menu"
      class="flex items-center ml-2 md:ml-4 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white-800 focus:ring-primary"
      aria-haspopup="true"
    >
      <BaseIcon name="shopping-bag" height="23" width="23" />

      <!-- count articles panier: bell -->
      <span
        class="bg-black ml-2 rounded-full h-6 w-6 md:h-8 md:w-8 flex items-center justify-center font-bold text-md md:text-lg text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white"
      >
        {{ articleCount }}
      </span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    articleCount: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss" scoped></style>
