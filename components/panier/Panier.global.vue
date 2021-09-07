<template>
  <div v-if="panierStatut">
    <div
      class="top-0 bottom-0 right-0 overflow-y-scroll fixed bg-white z-50 w-80 h-full"
    >
      <!------------------------------ <div> Panier vide ! </div> ----------------------------->
      <div v-if="articlesPanier.length === 0">
        <PanierVide />
      </div>
      <div v-else>
        <div class="px-5 border-b-2 border-gray-200 w-full h-full">
          <div class="text-2xl font-semibold font-serif mt-10">
            Info Livraison
          </div>
        </div>
        <div
          class="px-5 border-b-2 border-gray-200 w-full h-full flex flex-row flex-nowrap items-start justify-between"
        >
          <div
            class="flex flex-row flex-wrap items-center text-sm font-normal font-serif h-16"
          >
            <BaseIcon name="map-pin" width="16" height="16" />
            <div class="ml-3">25 rue des petites écuries</div>
            <div class="border-2 border-black">75010 Paris</div>
          </div>
          <div class="text-sm font-serif font-medium text-gray-700 mt-1">
            Modifier
          </div>
        </div>
      </div>

      <!------------------------------ <div> Panier non vide ! </div> ----------------------------->
    </div>
    <!------------------------- <div> Partie écran en Gris </div> --------------------------------->
    <div
      @click="closePanier"
      class="inset-0 w-full text-white bg-gray-900 opacity-50 md:flex-shrink-0 fixed left-0 h-screen z-40"
    ></div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import PanierVide from '@/components/panier/PanierVide.vue'
export default {
  components: {
    PanierVide,
  },

  computed: {
    ...mapState({
      panierStatut: (state) => state.panierModule.panierState,
      articlesPanier: (state) => state.panierModule.articlesPanier,
    }),
  },
  methods: {
    ...mapActions('panierModule', ['closePanier']),
  },
}
</script>

<style lang="css" scoped></style>
