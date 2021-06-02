<template>
  <div class="w-full">
    <div class="w-full flex flex-row items-end mt-2 md:mt-10">
      <div class="border-4 border-primary mb-2 w-14 h-0 z-0 mr-2"></div>
      <div
        :id="category"
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
        class="w-44 mr-2 my-3"
        v-for="(product, index) in ProductList"
        :key="index"
      >
        <ProductCard :data-product="product" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productList: {
      type: Array,
    },
    categoryName: {
      type: String,
    },
  },
  data() {
    return {
      urlVideoBanniere:
        'https://public-storage.frichti.co/marketing-items/videos/website_pesto_maison_v2.mp4',
      ProductList: [],
      category: '',
    }
  },
  created() {
    this.ProductList = this.productList
    this.category = this.categoryName
  },
}
</script>

<style lang="css" scoped></style>
