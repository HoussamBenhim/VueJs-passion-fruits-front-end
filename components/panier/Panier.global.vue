<template>
  <div
    :class="{
      hidden: !panierStatut,
    }"
  >
    <div
      id="panierMerp"
      class="top-0 bottom-0 right-0 overflow-y-scroll fixed bg-white z-50 w-full sm:w-96 h-full"
    >
      <!------------------------------ <div> Panier vide ! </div> ----------------------------->
      <div class="w-10">
        <BaseCloseButton @click-event="closePanier"></BaseCloseButton>
      </div>
      <div v-if="articlesPanier.length === 0">
        <PanierVide />
      </div>
      <div v-else>
        <div class="bg-gray-100 -mt-12">
          <div class="px-10 py-10 border-b-2 border-gray-100 w-full h-full">
            <div class="text-xl font-bold">Infos de Livraison</div>
          </div>
        </div>
        <!-- <div> Adresse</div> -->
        <AddressArea />
        <!------------------------------ <div> Insctruction aux livreur ! </div> ----------------------------->
        <DeliveryInfosArea />
        <!------------------------- <div> Vos produits </div> --------------------------------->

        <div class="bg-gray-50">
          <div class="px-10 py-5 border-b-2 border-gray-200 w-full h-full">
            <div class="text-xl font-bold">Vos produits</div>
          </div>
        </div>
        <div v-for="item in getArticlesWithoutDUplicates" :key="item[0].id">
          <Article path="fruits" :item="item[0]" :quantite="item[1].quantite" />
        </div>
        <!------------------------- <div>totaux </div> --------------------------------->
        <div
          class="flex flex-row justify-between bg-gray-100 border-t border-gray-500 px-3 py-4 text-sm font-serif font-semibold tracking-wide"
        >
          <div>Sous total</div>
          <div>{{ getTotal }}</div>
        </div>
        <div
          class="flex flex-row justify-between bg-gray-100 border-t border-gray-500 px-3 py-4 text-sm font-serif font-semibold tracking-wide"
        >
          <div>Frais de livraison</div>
          <div>0$</div>
        </div>
        <div
          class="flex flex-row justify-between bg-gray-100 border-t border-gray-500 px-3 py-4 text-sm font-serif font-semibold tracking-wide"
        >
          <div>Total</div>
          <div>{{ getTotal }}</div>
        </div>
        <!------------------------- <div> Button paiement </div> --------------------------------->
        <div class="bottom-0 w-9/12 mx-auto">
          <BaseButton name="continer" />
        </div>
      </div>
    </div>
    <!------------------------- <div> Partie écran en Gris </div> --------------------------------->
    <div
      class="hidden sm:flex inset-0 w-0 sm:w-full text-white bg-gray-900 opacity-50 md:flex-shrink-0 fixed left-0 h-screen z-40"
      @click="closePanier"
    ></div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import gsap from 'gsap'
import PanierVide from '@/components/panier/PanierVide.vue'
import Article from '@/components/panier/Article.vue'
import AddressArea from '@/components/panier/AddressArea.vue'
import DeliveryInfosArea from '@/components/panier/DeliveryInfoArea.vue'

export default {
  components: {
    DeliveryInfosArea,
    AddressArea,
    PanierVide,
    Article,
  },

  computed: {
    ...mapState({
      panierStatut: (state) => state.panierModule.panierState,
      articlesPanier: (state) => state.panierModule.articlesPanier,
    }),

    ...mapGetters('panierModule', ['getArticlesWithoutDUplicates', 'getTotal']),
  },
  watch: {
    panierStatut() {
      gsap.fromTo(
        '#panierMerp',
        {
          x: 50,
        },
        {
          x: 0,
          ease: 'power4',
          duration: 1.5,
        }
      )
    },
  },
  methods: {
    ...mapActions('panierModule', ['closePanier']),
  },
}
</script>

<style lang="css" scoped></style>
