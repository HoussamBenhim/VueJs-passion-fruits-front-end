<template>
  <div class="relative w-full overflow-hidden h-80">
    <video
      class="object-cover w-full h-50"
      autoplay="true"
      muted
      preload="auto"
      loop="true"
      :src="urlVideo"
      type="video/mp4"
    ></video>
  </div>
</template>

<script>
export default {
  props: ['url'],
  data() {
    return {
      urlVideo: '',
    }
  },

  created() {
    this.urlVideo = this.url
  },
}
</script>

<style lang="scss" scoped></style>
