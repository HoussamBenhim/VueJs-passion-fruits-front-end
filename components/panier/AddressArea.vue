<template>
  <div
    class="hover:bg-gray-100 cursor-pointer py-3 px-5 border-b-2 border-gray-200 w-full h-full flex flex-row flex-nowrap items-start justify-between"
    @click="openAddressChangeLog"
  >
    <div
      class="flex flex-row flex-nowrap items-start text-sm font-normal font-serif"
    >
      <BaseIcon name="map-pin" width="18" height="18" class="mr-4" />
      <div class="flex flex-col items-start text-sm font-medium">
        <span>{{ getAddress }}</span>
      </div>
    </div>
    <div class="text-sm font-serif font-medium text-gray-700 mt-1">
      Modifier
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      adress: '',
    }
  },
  computed: {
    ...mapGetters('panierModule', ['getAddress']),
  },
  methods: {
    ...mapActions('panierModule', [
      'openAddressChangeLog',
      'closeAddressChangeLog',
    ]),
  },
}
</script>

<style lang="scss" scoped></style>
