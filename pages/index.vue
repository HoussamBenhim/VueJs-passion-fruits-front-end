<template>
  <div class="block">
    <div class="flex flex-col">
      <HeroVideo
        urlVideo="https://static.frichti.co/assets/videos/hypermarket.mp4"
        titre="Des plats délicieux"
        soustitre="en direct de nos cuisine."
        shadowColor="3px 3px #fff190"
      />
      <div class="border-2 border-black w-full h-full flex col p-3">
        <div
          class="hidden lg:flex border-2 border-secondary w-1/4 h-screen"
        ></div>
        <div
          class="border-2 border-black w-3/4 flex flex-row flex-wrap p-1 h-screen"
        >
          <div class="border-2 border-black p-1 w-1/4"></div>
          <div class="border-2 border-black p-1 w-1/4"></div>
          <div class="border-2 border-black p-1 w-1/4"></div>
          <div class="border-2 border-black p-1 w-1/4"></div>
          <div class="border-2 border-black p-1 w-1/4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'commonLayouts',
  // created() {
  //   this.$store.dispatch('navBarModule/hideNavbar')
  // },
}
</script>

<style lang="scss" scoped></style>
