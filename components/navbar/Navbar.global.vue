<template>
  <div>
    <nav class="z-0 bg-primary">
      <div class="mx-auto px-2">
        <div class="relative flex items-center justify-between h-20">
          <!-- Mobile menu button Burger @click.prevent="switch_burger_icon_status"-->
          <Burgerbutton
            class="md:hidden"
            :burger-status="burger_icon_status"
            @switch_icon="switch_burger_icon_status"
          />
          <!-- logo -->
          <div @click="logout">
            <Logo />
          </div>
          <div
            class="absolute inset-y-0 right-0 flex items-center md:pr-2 md:mr-3 lg:mr-8 sm:static sm:inset-auto md:ml-6"
          >
            <!-- @click="toggelLoginForm" show or hide login/register form -->
            <LoginLogoutButton
              :name="getUserName"
              @toggle_login_form="show_hide_login_form"
            />
            <Basket :article-count="articles.length" />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Burgerbutton from './Burgerbutton'
import LoginLogoutButton from './LoginLogoutButton'
import Basket from './Basket'

export default {
  components: {
    Burgerbutton,
    LoginLogoutButton,
    Basket,
  },
  data() {
    return {
      burger_icon_status: false,
      user_is_logged: false,
      articles: [],
    }
  },
  computed: {
    ...mapGetters('loginModule', ['getUserName']),
    ...mapGetters(['getMenuState']),
    ...mapState('navBarModule', ['navBarStatus']),
  },
  methods: {
    switch_burger_icon_status() {
      this.burger_icon_status = !this.burger_icon_status
    },
    show_hide_login_form() {
      this.$store.dispatch('loginModule/setLoginFormState')
    },
    logout() {
      this.$store.dispatch('loginModule/logoutUser')
    },
  },

  /* methods: {
    toggelLoginForm() {
      this.$store.dispatch('userLoginRegister/setLoginFormState')
    },
    toggelMenu() {
      this.$store.dispatch('setMenuState')
      this.isOpen = this.getMenuState
    },
    logout() {
      this.$store.dispatch('userLoginRegister/logoutUser')
    },
  },
  computed: {
    ...mapGetters('LoginModule', ['isLogged', 'getUser']),
    ...mapGetters(['getMenuState']),
  }, */
}
</script>

<style lang="css" scoped></style>
