<template>
  <div
    class="mr-2 relative w-full rounded-2xl hover:shadow-2xl overflow-hidden hover-trigger"
  >
    <div
      class="hidden absolute top-0 bg-gray-800 w-full h-40 opacity-60 hover-target"
    >
      <div
        class="text-white text-xs font-mono font-bold flex flex-col justify-center content-around p-2 h-36"
      >
        <div
          v-for="(descreption, index) in objectProduct.poductDescriptionList"
          :key="index"
          class="flex justify-end"
        >
          <BaseIcon name="check" color="yellow" />
          <div class="opacity-100">
            {{ descreption.description }}
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-80 max-w-sm">
      <div class="w-full h-40">
        <img
          class="w-full h-40 object-cover object-center"
          :src="require(`@/assets/img/${path}/${objectProduct.image_url}`)"
          alt="limon"
          srcset=""
        />
      </div>
      <div class="flex flex-col justify-between content-center h-40">
        <div class="flex flex-col mt-2 sm:mx-2">
          <p class="text-xs font-mono font-bold text-gray-500">Frichti</p>
          <div
            class="text-base font-semibold mt-1 cursor-pointer hover:underline leading-4"
            @click="openProductBanner"
          >
            {{ objectProduct.name }}
          </div>
          <div class="text-xs font-mono font-medium text-gray-500 mt-1">
            {{ objectProduct.origin }}
          </div>
        </div>
        <div
          class="h-10 sm:mx-2 flex flex-row justify-between content-center items-center"
        >
          <div class="text-sm font-bold ml-2">{{ objectProduct.price }}$</div>
          <div class="flex">
            <div
              v-if="getArticleById(objectProduct).length"
              class="bg-black flex flex-col"
              @click="removeArticle(objectProduct)"
            >
              <p
                class="font-bold text-white text-lg w-8 p-0 text-center cursor-pointer"
              >
                -
              </p>
            </div>
            <div
              :class="{
                'bg-primary': currentPathName,
                'bg-secondary': !currentPathName,
                'flex flex-col mr-2': true,
              }"
              @click="addArticle(objectProduct)"
            >
              <p class="font-bold text-lg w-8 p-0 text-center cursor-pointer">
                +
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ['dataProduct', 'path'],
  data() {
    return {
      objectProduct: this.dataProduct,
    }
  },
  computed: {
    ...mapGetters('panierModule', ['getArticlesArray']),
    currentPathName() {
      return this.getCurrentPath() === 'fruits' || this.getCurrentPath() === ''
    },
  },
  methods: {
    ...mapActions('panierModule', ['addArticle', 'removeArticle']),
    ...mapActions('productBannerModule', ['setBannerState', 'setData']),

    getArticleById(payload) {
      return this.getArticlesArray.filter((article) => {
        return article.id === payload.id
      })
    },
    openProductBanner() {
      this.setData(this.objectProduct)
      this.setBannerState()
    },
    getCurrentPath() {
      return this.$nuxt.$route.path.substring(1)
    },
  },
}
</script>

<style lang="css" scoped>
.hover-trigger .hover-target {
  display: none;
}

.hover-trigger:hover .hover-target {
  display: block;
}
</style>
