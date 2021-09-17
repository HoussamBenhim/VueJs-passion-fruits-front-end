/* eslint-disable vue/require-default-prop */
<template>
  <div class="w-full">
    <div class="w-full flex flex-row items-end mt-2 md:mt-10">
      <div
        :class="{
          'border-primary': currentPathName,
          'border-secondary': !currentPathName,
          'border-4 mb-2 w-14 h-0 z-0 mr-2': true,
        }"
      ></div>
      <div
        :id="lienindex"
        class="font-bold tracking-wider text-md md:text-lg z-10"
      >
        {{ category }}
      </div>
    </div>

    <div
      class="w-full flex flex-row flex-wrap justify-center sm:justify-start content-start"
    >
      <div class="w-44 mr-2 my-3">
        <BanniereProduct :url="urlVideoBanniere" />
      </div>
      <div
        v-for="(product, index) in Products"
        :key="index"
        class="w-48 mr-3 my-3"
      >
        <ProductCard :path="imagePath" :data-product="product" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    productList: {
      type: Array,
    },
    // eslint-disable-next-line vue/require-default-prop
    categoryName: {
      type: String,
    },
    lienIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      urlVideoBanniere:
        'https://public-storage.frichti.co/marketing-items/videos/website_pesto_maison_v2.mp4',
      Products: [],
      category: '',
      imagePath: '',
      lienindex: 0,
    }
  },
  computed: {
    currentPathName() {
      return this.getCurrentPath() === 'fruits' || this.getCurrentPath() === ''
    },
  },
  created() {
    this.Products = this.productList
    this.category = this.categoryName
    this.imagePath = this.getCurrentPath()
    this.lienindex = this.lienIndex
  },
  methods: {
    getCurrentPath() {
      if (
        this.$nuxt.$route.path.substring(1) === '/' ||
        this.$nuxt.$route.path.substring(1) === ''
      ) {
        return 'fruits'
      } else {
        return this.$nuxt.$route.path.substring(1)
      }
    },
  },
}
</script>

<style lang="css" scoped></style>
