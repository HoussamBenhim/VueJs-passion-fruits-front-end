<template>
  <div class="w-full h-48 relative">
    <video
      class="w-full h-full"
      preload="auto"
      autoplay="true"
      loop="true"
      src="https://static.frichti.co/assets/videos/hypermarket.mp4"
      type="video/mp4"
    >
      <source
        src="https://static.frichti.co/assets/videos/hypermarket.mp4"
        type="video/mp4"
      />
    </video>

    <div class="absolute -mt-16">
      <p>Marché direct producteur</p>
      <p>Epicerie 100% clean.</p>
    </div>
  </div>
</template>

<script>
import videoPath from '~/assets/171124_G1_013.mp4'
export default {
  data() {
    return {
      videoPath,
      src: '~/assets/171124_G1_013.mp4',
    }
  },
}
</script>

<style></style>
