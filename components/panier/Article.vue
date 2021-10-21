<template>
  <div class="flex flex-row justify-between py-2 px-4">
    <div class="w-14 h-14">
      <img
        class="rounded-lg w-full h-full object-cover object-center -p-1"
        :src="require(`@/assets/img/${path}/${item.image_url}`)"
        alt="limon"
        srcset=""
      />
    </div>
    <div class="w-7/12 flex flex-col justify-items-start text-base font-serif">
      <p>{{ item.name }}</p>
      <p>{{ item.price }} kg</p>
    </div>
    <div class="w-2/12">
      <p class="text-sm text-gray-600">
        {{ quantite }} x
        <span class="text-black font-serif">{{ item.price }}$</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    path: {
      type: String,
      default: 'legumes',
    },
    quantite: {
      type: [String, Number],
      default: '0',
    },
  },
}
</script>

<style lang="scss" scoped></style>
