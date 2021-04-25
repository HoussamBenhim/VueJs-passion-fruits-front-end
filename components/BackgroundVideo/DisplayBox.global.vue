<template>
  <div class="relative">
    <div class="inset-0">
      <video
        class="object-cover w-full h-50"
        preload="auto"
        autoplay="true"
        loop="true"
        src="https://static.frichti.co/assets/videos/hypermarket.mp4"
        type="video/mp4"
      ></video>
    </div>
    <div class="absolute inset-0 bg-gray-900 w-full bg-opacity-30"></div>
    <div class="absolute top-1/3 w-full font-sans italic">
      <h2
        class="text-4xl md:text-5xl text-center text-white tracking-wide leading-8 font-black"
      >
        Des plats délicieux
      </h2>
      <h2
        class="text-4xl md:text-5xl text-center text-white leading-tight font-black text-shadow-lg"
      >
        en direct de nos cuisine.
      </h2>
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
