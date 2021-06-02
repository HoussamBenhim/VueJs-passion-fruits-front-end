<template>
  <div v-if="bannerState" class="relative">
    <div class="inset-0 overflow-y-scroll fixed bg-white z-50 w-98 h-full">
      <button
        class="fixed top-0 left-99 focus:outline-none"
        @click="closeProductBanner"
      >
        <BaseIcon name="x" width="25" hight="25" />
      </button>
      <img
        class="w-full h-97 object-cover object-center"
        :src="require(`@/assets/img/fruits/${dataObject.image}`)"
        alt="limon"
        srcset=""
      />
      <div class="w-full px-10">
        <div class="py-14 border-b-2 border-gray-300">
          <div class="text-lg text-gray-400 font-semibold">
            {{ dataObject.origine }}
          </div>
          <h3 class="text-3xl font-bold font-sans mt-2">
            {{ dataObject.titre }}
          </h3>
          <div class="mt-7 text-base text-gray-500 font-normal">
            {{ dataObject.description }}
          </div>
        </div>

        <div class="py-14 border-b-2 border-gray-300">
          <h3 class="text-2xl font-bold font-sans mt-2">Conservation</h3>
          <div class="mt-7 text-base text-gray-500 font-normal">
            {{ dataObject.conservation }}
          </div>
        </div>
        <div class="py-14 border-b-2 border-gray-300">
          <h3 class="text-2xl font-bold font-sans mt-2">Mode de culture</h3>
          <div class="mt-7 text-base text-gray-500 font-normal">
            {{ dataObject.culture }}
          </div>
        </div>
        <div class="py-14 border-b-2 border-gray-300">
          <h3 class="text-2xl font-bold font-sans mt-2">
            Valeur nutritionelle
          </h3>
          <div class="mt-7 text-base text-gray-500 font-normal">
            {{ dataObject.valeurNutri }}
          </div>
        </div>
        <div class="py-14 border-b-2 border-gray-300">
          <h3 class="text-2xl font-bold font-sans mt-2">Prix</h3>
          <div class="mt-7 text-base text-gray-500 font-normal">
            {{ dataObject.price }}
          </div>
        </div>
      </div>
      <div
        class="border-2 border-gray-300 flex flex-row justify-between px-10 items-center w-100 h-20 bg-white fixed bottom-0"
      >
        <div class="text-lg font-serif font-bold pt-2">
          {{ dataObject.price }}
        </div>
        <div @click="addArticle(dataObject)" class="w-28 h-5">
          <BaseButton name="Ajouter" />
        </div>
      </div>
    </div>

    <div
      @click="closeProductBanner"
      class="inset-0 w-full text-white bg-gray-900 opacity-50 md:flex-shrink-0 fixed left-0 h-screen z-40"
    ></div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  props: ['productData'],
  data() {
    return {
      dataObject: {},
    }
  },
  methods: {
    closeProductBanner() {
      this.$store.dispatch('productBannerModule/setBannerState')
      this.$store.dispatch('productBannerModule/clearData')
    },
    ...mapActions('navBarModule', ['addArticle', 'removeArticle']),
  },
  computed: {
    ...mapState({
      bannerState: (state) => state.productBannerModule.bannerState,
    }),
    ...mapGetters('productBannerModule', ['getData']),
  },
  watch: {
    bannerState() {
      this.dataObject = this.getData
    },
  },
}
</script>

<style lang="css" scoped></style>
