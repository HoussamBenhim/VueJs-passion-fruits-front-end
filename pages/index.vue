<template>
  <div class="block">
    <div class="flex flex-col">
      <HeroVideo
        url-video="https://static.frichti.co/assets/videos/hypermarket.mp4"
        titre="Des plats délicieux"
        soustitre="en direct de nos cuisine."
        shadow-color="3px 3px #fff190"
      />

      <MainLyout :dataObject="dataObject" />
    </div>
  </div>
</template>

<script>
import mainLyout from '@/components/mainLyout/MainLyout.vue'
export default {
  layout: 'commonLayouts',

  components: {
    mainLyout,
  },
  data() {
    return {
      dataObject: {
        titre: 'Fruits et Légumes',
        description: 'Toujours de saison, en direct producteur.',
        sousTitre: 'Fruits',
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
