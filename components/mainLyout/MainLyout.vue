<template>
  <div>
    <div class="w-full h-full flex col p-0">
      <SideBarMenu :list="data.ListCategories" />
      <div class="w-full lg:w-3/4 flex flex-row flex-wrap p-1 h-full lg:mx-12">
        <HelloComponent />
        <HeaderSection :titre="data.titre" :descript="data.description" />
        <CardsSection
          v-for="item in data.ListCategories"
          :key="item.id"
          :product-list="item.categoryProductList"
          :category-name="item.categoryName"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HelloComponent from '@/components/mainLyout/HelloComponent.vue'
import HeaderSection from '@/components/mainLyout/HeaderSection.vue'
import CardsSection from '@/components/mainLyout/CardsSection.vue'
export default {
  components: {
    HelloComponent,
    HeaderSection,
    CardsSection,
  },
  data() {
    return {
      data: {},
    }
  },
  props: {
    dataObject: {
      type: Object,
    },
  },
  created() {
    this.data = this.dataObject
  },
}
</script>

<style lang="css" scoped></style>
