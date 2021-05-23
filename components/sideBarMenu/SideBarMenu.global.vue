<template>
  <div class="hidden lg:block flex-non w-72 sticky pl-20 top-0 h-screen">
    <div class="mt-40 flex flex-col justify-between overflow-y-auto">
      <nuxt-link
        class="text-sm font-semibold my-2 opacity-60 hover:underline hover:opacity-95 cursor-pointer"
        v-for="(item, index) in listMenu"
        :key="index"
        :to="{ path: '/', hash: '#' + item }"
      >
        {{ item }}
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ['list'],
  data() {
    return {
      listMenu: [
        'Fruits à noyau',
        'Fruits à pépin',
        'Baies et fruits rouges',
        'Agrumes',
        'Fruits à coque',
        'Fruits exotiques',
      ],
    }
  },
  created() {
    this.listMenu = this.list.map((el) => el.categoryName)
  },
}
</script>

<style lang="css" scoped>
.nuxt-link-exact-active {
  color: black;
  opacity: 1;
  text-decoration: underline;
}
</style>
