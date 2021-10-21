<template>
  <div
    class="hover:bg-gray-100 cursor-pointer px-5 py-3 border-b-2 border-gray-200 w-full h-full flex flex-row flex-nowrap items-start justify-between"
    @click="openDeliveryLog"
  >
    <div
      class="flex flex-row flex-wrap items-start text-sm font-normal font-serif"
    >
      <BaseIcon name="info" width="18" height="18" class="mr-4" />
      <div class="flex flex-col items-start text-sm font-medium">
        <div class="text-sm tracking-wide font-semibold">
          Instructions au livreur
        </div>
      </div>
    </div>
    <div class="text-sm font-serif font-medium text-gray-700 mt-1">Ajouter</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('panierModule', ['openDeliveryLog']),
  },
}
</script>

<style lang="scss" scoped></style>
