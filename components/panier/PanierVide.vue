<template>
  <div
    class="relative flex flex-col justify-between items-center w-full h-full"
  >
    <div class="absolute inset-0 w-full h-10">
      <BaseCloseButton @click-event="closePanier" />
    </div>
    <div class="mt-64">
      <BaseErrorComponent message="votre panier est vide !" />
    </div>
    <div class="mb-10 w-full">
      <BaseButton @click-event="closePanier" name="ok! j'ai compris" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions('panierModule', ['closePanier']),
  },
}
</script>

<style lang="scss" scoped></style>
