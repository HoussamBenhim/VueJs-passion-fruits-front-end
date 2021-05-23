<template>
  <div
    class="mr-2 relative w-full rounded-2xl hover:shadow-2xl overflow-hidden hover-trigger"
  >
    <div
      class="hidden absolute top-0 bg-gray-800 w-full h-40 opacity-60 hover-target"
    >
      <div
        class="text-white text-xs font-mono font-bold flex flex-col justify-between p-2 h-36"
      >
        <div class="flex flex-row">
          <BaseIcon name="check" color="yellow" />
          <div class="opacity-100">
            {{ objectProduct.desciption.firstComment }}
          </div>
        </div>
        <div class="flex flex-row">
          <BaseIcon name="check" color="yellow" />
          <div class="opacity-100">
            {{ objectProduct.desciption.secondComment }}
          </div>
        </div>
        <div class="flex flex-row">
          <BaseIcon name="check" color="yellow" />
          <div class="opacity-100">
            {{ objectProduct.desciption.thirdComment }}
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-80 max-w-sm">
      <div class="w-full h-40">
        <img
          class="w-full h-40 object-cover object-center"
          :src="require(`@/assets/img/fruits/${objectProduct.image}`)"
          alt="limon"
          srcset=""
        />
      </div>
      <div class="flex flex-col justify-between content-center h-40">
        <div class="flex flex-col mt-2 sm:mx-2">
          <p class="text-xs font-mono font-bold text-gray-500">Frichti</p>
          <p
            class="text-base font-semibold mt-1 cursor-pointer hover:underline leading-4"
          >
            <NuxtLink to="/fruits">{{ objectProduct.tittle }}</NuxtLink>
          </p>
          <p class="text-xs font-mono font-medium text-gray-500 mt-1">
            {{ objectProduct.message }}
          </p>
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
              class="bg-primary flex flex-col mr-2"
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
  props: ['dataProduct', 'image'],
  data() {
    return {
      objectProduct: this.dataProduct,
    }
  },
  methods: {
    ...mapActions('navBarModule', ['addArticle', 'removeArticle']),
    getArticleById(payload) {
      return this.getArticlesArray.filter((article) => {
        return article.id === payload.id
      })
    },
  },
  computed: {
    ...mapGetters('navBarModule', ['getArticlesArray']),
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
