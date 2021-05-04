<template>
  <div
    class="w-full rounded-2xl hover:shadow-2xl overflow-hidden transform md:hover:scale-105"
  >
    <div class="w-full h-80 max-w-sm">
      <img
        class="w-full h-40 object-cover object-center"
        src="@/assets/fruits/framboises_fp_1.jpg"
        alt="limon"
        srcset=""
      />
      <div class="flex flex-col mt-2 sm:mx-2">
        <p class="text-xs font-mono font-bold text-gray-500">Frichti</p>
        <p
          class="text-base font-semibold mt-1 cursor-pointer hover:underline leading-4"
        >
          <NuxtLink to="/fruits">1 ticket pour la tombola</NuxtLink>
        </p>
        <p class="text-xs font-mono font-medium text-gray-500 mt-1">
          Les fonds sont reversés à une association caritative
        </p>
      </div>
      <div
        class="h-10 mt-2 sm:mx-2 flex flex-row justify-between content-center items-center"
      >
        <div class="text-sm font-bold ml-2">3.00$</div>
        <div class="bg-primary flex flex-col mr-2">
          <p class="font-bold text-lg w-8 p-0 text-center cursor-pointer">+</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped></style>
