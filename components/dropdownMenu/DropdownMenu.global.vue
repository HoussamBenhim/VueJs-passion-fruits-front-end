<template>
  <div id="dropdowmenu" :class="{ invisible: !getMenuState }">
    <div>
      <div
        class="w-full h-screen bg-white-200 md:flex-shrink-0 md:hidden opacity-100 fixed right-0 z-50"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu"
      >
        <router-link
          class="block px-4 py-2 text-md font-md text-gray-700 hover:bg-gray-100 border-gray-100 border-b-2 mx-10 mt-5 pt-5"
          to="/"
          >Fruits Bio</router-link
        >
        <router-link
          class="block px-4 py-2 text-md font-md text-gray-700 hover:bg-gray-100 border-gray-100 border-b-2 mx-10 pt-5"
          to="/"
          >légumes Bio</router-link
        >
        <router-link
          class="block px-4 py-2 text-md font-md text-gray-700 hover:bg-gray-100 border-gray-100 border-b-2 mx-10 pt-5"
          to="/"
          >L'épicerie</router-link
        >
        <router-link
          class="block px-4 py-2 text-md font-md text-gray-700 hover:bg-gray-100 border-gray-100 border-b-2 mx-10 pt-5"
          to="/"
          >Notre philosophie</router-link
        >
        <router-link
          class="block px-4 py-2 text-md font-md text-gray-700 hover:bg-gray-100 border-gray-100 border-b-2 mx-10 pt-5"
          to="/"
          >Bien manger</router-link
        >
        <router-link
          class="block px-4 py-2 text-md font-md text-gray-700 hover:bg-gray-100 border-gray-100 border-b-2 mx-10 pt-5"
          to="/"
          >Nos contacter</router-link
        >
        <div class="mx-5">
          <BaseButton name="Connexion" type="submit" class="mt-10">
            <BaseIcon name="user" />
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import mapState from 'vuex'
import gsap from 'gsap'
export default {
  //   ------------------------- if drow down menu is updated ===> run animation -----------------------------
  updated() {
    if (this.drop_down_menu_is_open) {
      gsap.fromTo(
        '#dropdowmenu',
        { duration: 0.1, x: 300, ease: 'expo.inOut' },
        { x: 0 }
      )
    }
  },
  //    ------------------------------------------------------------------------- -----------------------------
}
</script>

<style lang="scss" scoped></style>
