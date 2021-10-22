<template>
  <div class="relative flex flex-col justify-start w-full h-full">
    <div class="mt-64">
      <BaseErrorComponent message="votre panier est vide !" />
    </div>
    <div class="mb-10">
      <BaseButton name="ok! j'ai compris" @click-event="closePanier" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      loginFormState: (state) => state.loginModule.loginFormIsOppen,
    }),
  },
  methods: {
    ...mapActions('panierModule', ['closePanier']),
  },
}
</script>

<style lang="scss" scoped></style>
