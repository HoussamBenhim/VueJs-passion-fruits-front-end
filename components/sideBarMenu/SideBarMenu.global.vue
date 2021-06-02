<template>
  <div class="hidden lg:block flex-non w-72 sticky pl-20 top-0 h-screen">
    <div class="mt-40 flex flex-col justify-between overflow-y-auto">
      <nuxt-link
        class="text-sm font-semibold my-2 opacity-60 hover:opacity-95 cursor-pointer"
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
      listMenu: new Set([]),
    }
  },
  created() {
    this.listMenu = this.list
  },
}
</script>

<style lang="css" scoped>
.nuxt-link-exact-active {
  color: black;
  opacity: 1;
  text-decoration: none;
}
</style>
