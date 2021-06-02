<template>
  <div class="w-full">
    <div class="w-full flex flex-row items-end mt-2 md:mt-7">
      <p class="font-bold tracking-wider text-md md:text-xl z-10">
        {{ titre }}
      </p>
    </div>
    <div class="w-full flex flex-row items-end">
      <p class="font-medium text-sm z-10 my-1">{{ descript }}</p>
    </div>

    <!-- <div class="w-full flex flex-row items-end">
      <p class="font-medium text-sm z-10 my-1">{{ soustitre }}</p>
    </div> -->
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
}
</script>

<style lang="css" scoped></style>
