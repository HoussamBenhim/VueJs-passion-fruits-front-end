<template>
  <div class="block">
    <div class="flex flex-col">
      <HeroVideo
        url-video="https://static.frichti.co/assets/videos/hypermarket.mp4"
        titre="Des plats délicieux"
        soustitre="en direct de nos cuisine."
        shadow-color="3px 3px #fff190"
      />
      <div class="border-2 border-black w-full h-full flex col p-0 md:p-5">
        <div
          class="hidden lg:flex border-2 border-secondary w-1/4 h-screen"
        ></div>
        <div
          class="w-full lg:w-3/4 flex flex-row flex-wrap p-1 h-full lg:mx-12"
        >
          <div class="w-full flex flex-col">
            <p class="font-bold tracking-wider text-xl md:text-2xl z-10">
              {{ hello }}
            </p>
            <div class="border-4 border-primary -mt-2 z-0"></div>
          </div>
          <div class="w-full flex flex-row items-end mt-2 md:mt-7">
            <div class="border-4 border-primary mb-2 w-14 h-0 z-0 mr-2"></div>
            <p class="font-medium tracking-wider text-md md:text-lg z-10">
              Fruits & légumes
            </p>
          </div>
          <div class="w-full flex flex-row items-end">
            <p class="font-medium text-sm z-10 my-1">
              Lorem ipsum dolor sit amet.
            </p>
          </div>

          <div class="w-full flex flex-row items-end">
            <p class="font-medium text-sm z-10 my-1">Fruits</p>
          </div>
          <div
            class="w-full flex flex-row flex-wrap justify-center sm:justify-start content-start justify-between mt-5"
          >
            <div class="w-6/12 md:w-60 sm:p-2 md:mr-2">
              <Card />
            </div>
            <div class="w-6/12 md:w-60 sm:p-2 md:mr-2">
              <Card />
            </div>
            <div class="w-6/12 md:w-60 sm:p-2 md:mr-2">
              <Card />
            </div>
            <div class="w-6/12 md:w-60 sm:p-2 md:mr-2">
              <Card />
            </div>
          </div>
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
  computed: {
    hello() {
      const now = new Date()
      return now.getHours() >= 17 ? 'Bonsoir' : 'Bonjour'
    },
  },
}
</script>

<style lang="scss" scoped></style>
