<template>
  <div>
    <div
      v-if="Object.keys(this.dataObject).length > 0"
      class="w-full h-full flex col p-0"
    >
      <SideBarMenu :list="listSubCategories" />
      <div class="w-full lg:w-3/4 flex flex-row flex-wrap p-1 h-full lg:mx-12">
        <HelloComponent />
        <HeaderSection :titre="titre" :descript="description" />
        <CardsSection
          v-for="(item, index) in listSubCategories"
          :key="index"
          :lien-index="index"
          :product-list="listFruitParSubCategory.get(item)"
          :category-name="item"
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
  props: {
    // eslint-disable-next-line vue/require-default-prop
    dataObject: {
      type: Object,
      dafault: {},
    },
  },
  data() {
    return {
      titre: '',
      description: '',
      listSubCategories: new Set([]),
      listFruitParSubCategory: new Map(),
    }
  },

  created() {
    this.titre = this.dataObject.categoryDescription

    this.dataObject.productSubCategory.map((subCategory) => {
      this.listSubCategories.add(subCategory.subCtergoryName.toLowerCase())
      this.listFruitParSubCategory.set(
        subCategory.subCtergoryName.toLowerCase(),
        subCategory.products
      )
    })
  },
}
</script>

<style lang="css" scoped></style>
