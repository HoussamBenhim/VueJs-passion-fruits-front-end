<template>
  <div class="block">
    <div class="flex flex-col">
      <HeroVideo
        url-video="https://static.frichti.co/assets/videos/hypermarket.mp4"
        titre="Des plats délicieux"
        soustitre="en direct de nos cuisine."
        shadow-color="3px 3px #fff190"
      />

      <MainLyout class="relative" :data-object="data" />
    </div>
  </div>
</template>

<script>
import mainLyout from '@/components/mainLyout/MainLyout.vue'
import axios from 'axios'
export default {
  layout: 'commonLayouts',

  components: {
    mainLyout,
  },
  data() {
    return {
      dataArray: [],
    }
  },
  async asyncData(context) {
    const url = process.env.DEV_BASE_URL + '/categories/LEGUMES'
    const { data } = await axios.get(url)
    return { data }
  },
}
</script>
<style lang="scss" scoped></style>
