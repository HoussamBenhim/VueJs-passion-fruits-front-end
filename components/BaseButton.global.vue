<template>
  <button
    v-bind="$attrs"
    :type="type"
    class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
  >
    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
      <!-- Slot: SVG -->
      <slot />
    </span>
    {{ name }}
  </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'connexion',
    },
    type: {
      type: String,
      default: 'submit',
    },
  },
}
</script>

<style lang="css" scoped></style>
