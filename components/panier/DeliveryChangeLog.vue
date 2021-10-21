<template>
  <div
    :class="{
      hidden: !deliveryInfosLog,
    }"
  >
    <div
      id="panierMerp"
      class="border border-black top-0 bottom-0 right-0 overflow-y-scroll fixed bg-white z-50 w-full sm:w-96 h-full"
    >
      <div><BaseCloseButton @click-event="closeDeliveryLog" /></div>
      <div>Delivery Change Log</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState({
      deliveryInfosLog: (state) => state.panierModule.deliveryInfosLog,
    }),
  },
  methods: {
    ...mapActions('panierModule', ['closeDeliveryLog']),
  },
}
</script>

<style lang="scss" scoped></style>
