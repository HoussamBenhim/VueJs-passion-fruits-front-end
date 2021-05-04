<template>
  <div class="w-full h-full flex col p-0 md:p-5">
    <SideBar />
    <div class="w-full lg:w-3/4 flex flex-row flex-wrap p-1 h-full lg:mx-12">
      <HelloComponent />
      <HeaderSection
        :titre="data.titre"
        :descript="data.description"
        :soustitre="data.sousTitre"
      />
      <CardsSection />
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/mainLyout/SideBar.vue'
import HelloComponent from '@/components/mainLyout/HelloComponent.vue'
import HeaderSection from '@/components/mainLyout/HeaderSection.vue'
import CardsSection from '@/components/mainLyout/CardsSection.vue'
export default {
  components: {
    SideBar,
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
