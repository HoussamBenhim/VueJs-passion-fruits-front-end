<template>
  <div>
    <div class="w-full h-full flex col p-0">
      <SideBarMenu :list="listCat" />
      <div class="w-full lg:w-3/4 flex flex-row flex-wrap p-1 h-full lg:mx-12">
        <HelloComponent />
        <HeaderSection
          :titre="dataObject.titre"
          :descript="dataObject.description"
        />
        <CardsSection
          v-for="item in listCat"
          :key="item"
          :product-list="listFruitParCat.get(item)"
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
  data() {
    return {
      listCat: new Set([]),
      listFruitParCat: new Map(),
    }
  },
  props: {
    dataObject: {
      type: Object,
    },
  },
  created() {
    this.dataObject.ListFruis.map((el) => {
      if (!this.listCat.has(el.categoryFruit)) {
        this.listCat.add(el.categoryFruit)
      }
    })
    this.listCat.forEach((cat) => {
      const listFruits = this.dataObject.ListFruis.filter(
        (el) => el.categoryFruit === cat
      )
      this.listFruitParCat.set(cat, listFruits)
    })
  },
}
</script>

<style lang="css" scoped></style>
