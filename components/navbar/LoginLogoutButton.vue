<template>
  <div class="pr-3 md:pr-7 hidden sm:flex w-auto border-r-2 border-gray-400">
    <button
      class="flex items-center text-gray-900 focus:outline-none"
      @click.prevent="$emit('toggle_login_form')"
    >
      <BaseIcon name="user" width="25" height="25" />
      <span class="px-2 hidden font-bold text-lg md:flex"> {{ name }} </span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'connexion',
    },
  },
}
</script>

<style lang="scss" scoped></style>
