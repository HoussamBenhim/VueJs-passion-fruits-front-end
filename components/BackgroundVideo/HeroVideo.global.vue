<template>
  <div class="relative">
    <div>
      <video
        class="object-cover w-full h-50"
        preload="auto"
        autoplay="true"
        loop="true"
        :src="urlVideo"
        type="video/mp4"
      ></video>
    </div>

    <div id="heroTitre" class="absolute top-1/3 w-full font-sans italic">
      <h2
        class="text-2xl sm:text-4xl md:text-5xl text-center text-white tracking-wide leading-8 font-black textShadow"
        :style="{ textShadow: shadowColor }"
      >
        {{ titre }}
      </h2>
      <h2
        class="text-2xl sm:text-4xl md:text-5xl text-center text-white leading-tight font-black textShadow"
        :style="{ textShadow: shadowColor }"
      >
        {{ soustitre }}
      </h2>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  props: {
    urlVideo: {
      type: String,
      default: '',
    },
    titre: {
      type: String,
      default: '',
    },
    soustitre: {
      type: String,
      default: '',
    },
    shadowColor: {
      type: String,
      default: '3px 3px #fff190',
    },
  },
  mounted() {
    gsap.fromTo(
      '#heroTitre',
      {
        x: -200,
      },
      {
        x: 0,
        ease: 'power4',
        duration: 1,
      }
    )
  },
}
</script>

<style lang="css" scoped>
.textShadow {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgb(14, 12, 12);
}
</style>
