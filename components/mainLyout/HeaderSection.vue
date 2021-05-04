<template>
  <div>
    <div class="w-full flex flex-row items-end mt-2 md:mt-7">
      <div class="border-4 border-primary mb-2 w-14 h-0 z-0 mr-2"></div>
      <p class="font-medium tracking-wider text-md md:text-lg z-10">
        {{ titre }}
      </p>
    </div>
    <div class="w-full flex flex-row items-end">
      <p class="font-medium text-sm z-10 my-1">{{ descript }}</p>
    </div>

    <div class="w-full flex flex-row items-end">
      <p class="font-medium text-sm z-10 my-1">{{ soustitre }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titre: {
      type: String,
      default: '',
    },
    descript: {
      type: String,
      default: '',
    },
    soustitre: {
      type: String,
      default: '',
    },
  },
  created() {
    console.log(this.titre)
  },
}
</script>

<style lang="css" scoped></style>
